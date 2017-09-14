"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_services_component_1 = require("./app.services.component");
var app_employee_list_component_1 = require("./app.employee.list.component");
var app_employee_details_component_1 = require("./app.employee.details.component");
var http_1 = require("@angular/http");
var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
        declarations: [app_services_component_1.ServicesComponent, app_employee_list_component_1.EmployeeListComponent, app_employee_details_component_1.EmplooyeeDetailsComponent],
        bootstrap: [app_services_component_1.ServicesComponent]
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=app.services.module.js.map