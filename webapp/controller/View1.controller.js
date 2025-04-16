sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
        },

        secondValidation: function () {
            var wizardContainer = this.getView().byId("wizardId");
            var name = this.getView().byId("nameId").getValue();
            var age = this.getView().byId("ageId").getValue();

            if(name.length > 6 && age >= 18) {
                wizardContainer.validateStep(this.getView().byId("secondWizard"));
            }
            else {
                wizardContainer.invalidateStep(this.getView().byId("secondWizard"));
            }
        }
    });
});