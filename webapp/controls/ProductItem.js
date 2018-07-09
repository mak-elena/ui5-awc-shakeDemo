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
				// get button element
				var oEventSource = oEvent.getSource();

				// get product item
				// todo: refactor
				var oItem = oEventSource.getParent().getParent();
				if(oItem && oItem.getQuantity) {
					var iValue = oItem.getQuantity() + 1;
					oItem.setQuantity(iValue);
				}
			},

			onDecreaseQuantity: function (oEvent) {
				// get button element
				var oEventSource = oEvent.getSource();

				// get product item
				// todo: refactor
				var oItem = oEventSource.getParent().getParent();
				if(oItem && oItem.getQuantity) {
					var iValue = oItem.getQuantity() ? oItem.getQuantity() - 1 : 0;
					oItem.setQuantity(iValue);
				}

			},
		});
	});
