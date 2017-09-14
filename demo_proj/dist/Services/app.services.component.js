"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var app_employee_service_1 = require("./app.employee.service");
var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    core_1.Component({
        selector: 'services-demo',
        template: "<h2> Service Demo</h2>\n        <employee-list></employee-list>\n        <employee-details></employee-details>",
        providers: [app_employee_service_1.EmployeeService]
    })
], ServicesComponent);
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=app.services.component.js.map