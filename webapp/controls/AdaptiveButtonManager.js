sap.ui.define([
	"ui5/awc/demo/controls/AwcProfileManager"
	],
	function(){
	"use strict";

		function initContextStyles() {
			var oContextStyleElement = document.createElement("context-style");
			oContextStyleElement.innerHTML ="" +
					"@context (vibration > 0) {" +
					".sapMBtn.ui5-awc_adaptiveButton .sapMBtnContent {" +
						"padding: 1.5rem;" +
						"font-size: 1.2rem;" +
					"}" +
					" .sapMBtn.ui5-awc_adaptiveButton .sapMBtnIcon {" +
						"padding: 0.4rem;" +
					"}" +
					/*" .sapMBtn.ui5-awc_adaptiveButton," +
					" .sapMBtn.ui5-awc_adaptiveButton > .sapMBtnInner {" +
						"height: auto;" +
					"}" +*/
				"}" +
				"@context (vibration > 1) { " +
					".sapMBtn.ui5-awc_adaptiveButton .sapMBtnContent {" +
						"padding: 2.5rem 0rem;" +
						"font-size: 1.5rem;" +
					"}" +
					" .sapMBtn.ui5-awc_adaptiveButton .sapMBtnIcon {" +
						"padding: 0.7rem;" +
					"}" +
				"}";
			var oHead = document.querySelector('head');
			oHead.appendChild(oContextStyleElement);
		};

		initContextStyles();
	});