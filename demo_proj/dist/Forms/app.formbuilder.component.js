"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormBuilderComponent = (function () {
    function FormBuilderComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ;
    FormBuilderComponent.prototype.ngOnInit = function () {
        this.userData = this._formBuilder.group({
            fName: ['test5555', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            lName: [],
            address: this._formBuilder.group({
                state: [],
                city: [],
                pCode: [null, [forms_1.Validators.pattern("^[1-9][0-9]{4}$")]]
            })
        });
    };
    FormBuilderComponent.prototype.onSubmit = function () {
        console.log(this.userData.value);
    };
    return FormBuilderComponent;
}());
FormBuilderComponent = __decorate([
    core_1.Component({
        selector: 'form-builder',
        templateUrl: 'demo_proj/Forms/Html/user_data_form_mdf.html',
        styles: ["input.ng-invalid{ border-left:5px solid red}\n        input.ng-valid{ border-left:5px solid green}"]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormBuilderComponent);
exports.FormBuilderComponent = FormBuilderComponent;
//# sourceMappingURL=app.formbuilder.component.js.map