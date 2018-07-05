/* global document */

/* AWC Profile Store singleton */
sap.ui.define([
	"ui5/awc/thirdparty/awc-core"
	], function () {
		"use strict";
		var _profileStoreInstance;

	function createInstance() {

		var oInstance = new awc.ProfileStore(true);
		return oInstance;
	}

		return {
			getInstance: function () {
				if (!_profileStoreInstance) {
					_profileStoreInstance = createInstance();
				}
				return _profileStoreInstance;
			},

			initProfile: function() {
				this.getInstance(); //.changeProfile({"vibration": 1});
			},

			updateProfile: function(oData) {
				this.getInstance().changeProfile(oData);
			}
		};

	}
);