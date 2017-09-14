"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_model_driven_forms_component_1 = require("./app.model.driven.forms.component");
var FormsDemoModule = (function () {
    function FormsDemoModule() {
    }
    return FormsDemoModule;
}());
FormsDemoModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [app_model_driven_forms_component_1.ModelDrivenFormsComp],
        bootstrap: [app_model_driven_forms_component_1.ModelDrivenFormsComp]
    })
], FormsDemoModule);
exports.FormsDemoModule = FormsDemoModule;
//# sourceMappingURL=app.forms.module.js.map