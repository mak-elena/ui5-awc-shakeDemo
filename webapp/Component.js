/* global document */
sap.ui.define([
		"jquery.sap.global",
		"sap/ui/core/UIComponent",
		"sap/ui/Device",
		"sap/ui/model/json/JSONModel",
		"ui5/awc/demo/model/models",
		"ui5/awc/demo/controls/AwcProfileManager",
		"ui5/awc/demo/controller/ErrorHandler",
		"ui5/awc/demo/model/ContextModel"
	], function (jQuery, UIComponent, Device, JSONModel, models, AwcProfileStore, ErrorHandler, ContextModel) {
		"use strict";

		return UIComponent.extend("ui5.awc.demo.Component", {

			metadata: {
				manifest: "json"
			},

			/**
			 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
			 * In this method, the device models are set and the router is initialized.
			 * @public
			 * @override
			 */
			init: function () {
				this._oErrorHandler = new ErrorHandler(this);

				// setup models
				this.setModel(models.createDeviceModel(), "device");

				this._initContextModel();
				this._initProductsModel();
				this._initTripsModel();
				this.updateContextProfile();

				this._initSensors();


				// call the base component's init function and create the App view
				UIComponent.prototype.init.apply(this, arguments);

				// create the views based on the url/hash
				this.getRouter().initialize();
			},

			/**
			 * The component is destroyed by UI5 automatically.
			 * In this method, the ErrorHandler are destroyed.
			 * @public
			 * @override
			 */
			destroy: function () {
				this._oErrorHandler.destroy();
				// call the base component's destroy function
				UIComponent.prototype.destroy.apply(this, arguments);
			},

			/**
			 * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
			 * design mode class should be set, which influences the size appearance of some controls.
			 * @public
			 * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
			 */
			getContentDensityClass: function () {
				if (this._sContentDensityClass === undefined) {
					// check whether FLP has already set the content density class; do nothing in this case
					if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
						this._sContentDensityClass = "";
					} else if (Device.system.desktop) { // apply "compact" mode for desktop devices
						this._sContentDensityClass = "sapUiSizeCompact";
					} else {
						// "cozy" in case of phones, tablets devices(touch support); default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
						this._sContentDensityClass = "sapUiSizeCozy";
					}
				}
				return this._sContentDensityClass;
			},

			updateContextProfile: function () {
				var oContextModel = this.getModel("context");
				AwcProfileStore.updateProfile(oContextModel.getData());
			},

			_initContextModel: function () {
				var oContextModel = new ContextModel({
						"display-mode": "mixed",
						"vibration": "1"
					}
				);
				oContextModel.setDefaultBindingMode("TwoWay");
				this.setModel(oContextModel, "context");
				this._contextModel = this.getModel("context");

				this._contextModel.attachPropertyChange(function () {
					this.updateContextProfile();
				}.bind(this));
			},

			_initProductsModel: function () {
				var oProductsModel = new JSONModel(jQuery.sap.getModulePath("ui5/awc/demo", "/model/Products.json"));
				//this.setModel(oProductsModel, "products");
				this.setModel(oProductsModel);
			},

			_initTripsModel: function () {
				var oTripsModel = new JSONModel(jQuery.sap.getModulePath("ui5/awc/demo", "/model/Trips.json"));
				//this.setModel(oProductsModel, "products");
				this.setModel(oTripsModel, "trips");
			},

			_initSensors: function () {
				this._sensor = new Accelerometer({frequency: 60});
				this._sensor.start();
				this._sensor.active = true;

				this._sensor.addEventListener('reading', this.onSensorReading.bind(this))
			},

			onSensorReading: function () {
				this._contextModel.setProperty("/accelerationX", this._sensor.x);
				this._contextModel.setProperty("/accelerationY", this._sensor.y);
				this._contextModel.setProperty("/accelerationZ", this._sensor.z);
				var iVibrationLevel = 0;
				if (Math.abs(sensor.x) > 2) {
					iVibrationLevel = 2;
				} else if (Math.abs(sensor.x) > 1) {
					iVibrationLevel = 1;
				}

				// Postpone update vibration level in case it is less then current
				if (this._contextModel.getProperty("/vibration") > iVibrationLevel & !this._timeout) {
					if (this._timeout != null) {
						this._timeout = setTimeout(
							this._updateVibrationLevel().bind(this),
							2000,
							iVibrationLevel)
					}
				}
				else {
					if (this._timeout != null) {
						clearTimeout(this._timeout);
						this._timeout = null;
					}

					if (this._contextModel.getProperty("/vibration") < iVibrationLevel) {
						this._contextModel.setProperty("/vibration", iVibrationLevel);
						this.updateContextProfile();
					}
				}
			},

			_updateVibrationLevel: function (iVibrationLevel) {
				alert("_updateVibrationLevel " + iVibrationLevel)
				this._contextModel.setProperty("/vibration", iVibrationLevel);
				this.updateContextProfile();
				this._timeout = null;
			}

		});

	}
);