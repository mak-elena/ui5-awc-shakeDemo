sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"jquery.sap.storage"
], function(JSONModel) {
	"use strict";

	return JSONModel.extend("ui5.awc.ContextModel", {

		/**
		 * Create modet to store context properties values
		 * @param {Object} oInitialData a settings object passed to the JSON model
		 * @return {ui5.awc.ContextModel} the new model instance
		 */
		constructor : function(oInitialData) {
			// call super constructor
			JSONModel.apply(this, arguments);

			this.setSizeLimit(1000000);

			// set data
			this.setData(oInitialData);
			this.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);

			return this;
		}
	});
});
