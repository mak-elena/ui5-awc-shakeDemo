sap.ui.define([
		'sap/m/Button',
		"sap/ui/Device",
		"ui5/awc/AdaptiveButtonManager"
	],
	function (Button) {
		"use strict";

		return Button.extend("ui5.awc.demo.AdaptiveButton", {
			metadata: {
				properties: {}
			},

			init: function () {
				// init CSS
				this.addStyleClass("ui5-awc_adaptiveButton");
			},

			renderer: function (oRM, oControl) {
				sap.m.ButtonRenderer.render(oRM, oControl);
			}
		});
	});
