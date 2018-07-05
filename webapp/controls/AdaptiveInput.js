sap.ui.define([
		'sap/m/Input',
		"ui5/awc/AdaptiveInputManager"
	],
	function (Input) {
		"use strict";

		return Input.extend("ui5.awc.demo.AdaptiveInput", {
			metadata: {
				properties: {}
			},

			init: function () {
				// init CSS
				this.addStyleClass("ui5-awc_adaptiveInput");
			},

			renderer: function (oRM, oControl) {
				sap.m.InputRenderer.render(oRM, oControl);
			}
		});
	});
