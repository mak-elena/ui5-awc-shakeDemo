sap.ui.define([
		"ui5/awc/demo/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/ui/Device"
	], function (BaseController, JSONModel, Device) {
		"use strict";

		return BaseController.extend("ui5.awc.demo.controller.App", {

			onInit : function () {
				var oViewModel = new JSONModel({
					delay : 0,
					layout : "OneColumn",
					previousLayout : "",
					actionButtonsInfo : {
						midColumn : {
							enterFullScreen : !Device.system.phone,
							fullScreenMode : false
						}
					}
				});
				this.setModel(oViewModel, "appView");

				// apply content density mode to root view
				this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			}

		});

	}
);
