"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ModelDrivenFormsComp = (function () {
    function ModelDrivenFormsComp() {
        this.userData = new forms_1.FormGroup({
            fName: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]),
            lName: new forms_1.FormControl(),
            address: new forms_1.FormGroup({
                state: new forms_1.FormControl(),
                city: new forms_1.FormControl(),
                pCode: new forms_1.FormControl(null, forms_1.Validators.pattern('^[1-9][0-9]{4}$'))
            })
        });
    }
    ModelDrivenFormsComp.prototype.onSubmit = function () {
        console.log(this.userData.value);
    };
    return ModelDrivenFormsComp;
}());
ModelDrivenFormsComp = __decorate([
    core_1.Component({
        selector: 'model-driven',
        templateUrl: 'demo_proj/Forms/Html/user_data_form_mdf.html',
        styles: ["input.ng-invalid{ border-left:5px solid red }\n        input.ng-valid{ border-left:5px solid green }"]
    })
], ModelDrivenFormsComp);
exports.ModelDrivenFormsComp = ModelDrivenFormsComp;
//# sourceMappingURL=app.model.driven.forms.component.js.map