sap.ui.define([
		'sap/ui/core/XMLComposite',
		"ui5/awc/AdaptiveButtonManager"
	],
	function (XMLComposite) {
		"use strict";

		return XMLComposite.extend("ui5.awc.demo.controls.ProductItem", {
			metadata: {
				properties: {
					name: { type: "string"},
					price: { type: "float", defaultValue: 0},
					currency: { type: "string", defaultValue: "EUR"},
					quantity: { type: "int", defaultValue: 0, minValue: 0},
				},
				events: {
					quantityChanges: {
						parameters: {
							value: {type: "int"}
						}
					}
				}
			},

			onIncreaseQuantity: function(oEvent) {
				var oEventSource = oEvent;
				var iValue = this.getQuantity() + 1;
				this.setQuantity(iValue);
			},

			onDecreaseQuantity: function (oEvent) {
				var oEventSource = oEvent;
				var iValue = this.getQuantity() ? this.getQuantity() - 1 : 0;
				this.setQuantity(iValue);
			},
		});
	});
