/*global location */
sap.ui.define([
		"ui5/awc/demo/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"ui5/awc/demo/model/formatter",
		"ui5/awc/demo/controls/AwcProfileManager"
	], function (BaseController, JSONModel, formatter, AwcProfileStore) {
		"use strict";

		return BaseController.extend("ui5.awc.demo.controller.UiDensity", {

			formatter: formatter,

			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */

			onInit : function () {
				this.getRouter().getRoute("uiDensity").attachPatternMatched(this._onObjectMatched, this);
			},

			/* =========================================================== */
			/* event handlers                                              */
			/* =========================================================== */

			onIncreaseNumber: function(oEvent) {
				var oEventSource = oEvent
			},

			onDecreaseNumber: function (oEvent) {

			},

			onFullScreenPress: function () {
				this.getModel("appView").setProperty("/actionButtonsInfo/midColumn/fullScreenMode", true);
				this.getModel("appView").setProperty("/layout", "MidColumnFullScreen");
			},

			onExitFullScreenPress: function () {
				this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
				this.getModel("appView").setProperty("/actionButtonsInfo/midColumn/fullScreenMode", false);
			},

			onCloseExamplePress: function () {
				this.getModel("appView").setProperty("/actionButtonsInfo/midColumn/fullScreenMode", false);
				this.getRouter().navTo("master");
			},

			/* =========================================================== */
			/* begin: internal methods                                     */
			/* =========================================================== */

			/**
			 * Binds the view to the object path and expands the aggregated line items.
			 * @function
			 * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
			 * @private
			 */
			_onObjectMatched : function (oEvent) {
				this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
			}

		});

	}
);
