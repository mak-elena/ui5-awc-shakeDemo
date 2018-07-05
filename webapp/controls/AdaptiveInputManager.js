sap.ui.define([],
	function(){
	"use strict";

		function initContextStyles() {
			var oContextStyleElement = document.createElement("context-style");
			oContextStyleElement.innerHTML =
				"@context (vibration > 0) {" +
					".sapMInput.ui5-awc_adaptiveInput .sapMInputBaseInner {" +
						"width: 3.4rem;" +
						"font-size: 1.2rem;" +
					"}" +
					".sapMInput.ui5-awc_adaptiveInput > .sapMInputDivWrapper {" +
						"height: 100%;" +
					"}" +
				"}" +
				"@context (vibration > 1) {" +
					".sapMInput.ui5-awc_adaptiveInput .sapMInputBaseInner {" +
						"width: 3.4rem;" +
						"font-size: 1.8rem;" +
					"}" +
				"}";
			var oHead = document.querySelector('head');
			oHead.appendChild(oContextStyleElement);
		};

		initContextStyles();
	});