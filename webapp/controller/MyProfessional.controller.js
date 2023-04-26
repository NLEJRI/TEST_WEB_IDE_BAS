sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/resource/ResourceModel'
], function (JSONModel, Controller, ResourceModel) {
	"use strict";
	return Controller.extend("sap.uxap.sample.MyProfessional.controller.MyProfessional", {
		onInit: function () {
			var oJsonModel = new JSONModel({
				"Employee": [
					{
						"name": "Michael Adamssssss",
						"picture": "./test-resources/sap/uxap/images/person.png",
						"job": "Scrum Master"
					}, {
						"name": "John Miller",
						"picture": "./test-resources/sap/uxap/images/person.png",
						"job": "Product Owner"
					}, {
						"name": "Richard Wilson",
						"picture": "./test-resources/sap/uxap/images/person.png",
						"job": "Ux Designer"
					}, {
						"name": "Julie Armstrong",
						"picture": "./test-resources/sap/uxap/images/person.png",
						"job": "Quality Engineer"
					}, {
						"name": "Denise Smith",
						"picture": "./test-resources/sap/uxap/images/person.png",
						"job": "Team Member"
					}, {
						"name": "Richard Adams",
						"picture": "./test-resources/sap/uxap/images/person.png",
						"job": "Team Member"
					}

				]
			});
			this.getView().setModel(oJsonModel, "ObjectPageModel");
			this._oI18NModel = new ResourceModel({
				bundleName: "sap.uxap.sample.MyProfessional.i18n.i18n"
			});
			// set I18N model
			this.getView().setModel(this._oI18NModel, "i18n");
		}
	});
});