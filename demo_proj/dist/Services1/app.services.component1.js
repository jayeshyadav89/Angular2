"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var app_employee_service1_1 = require("./app.employee.service1");
var ServicesDemo1 = (function () {
    function ServicesDemo1() {
    }
    return ServicesDemo1;
}());
ServicesDemo1 = __decorate([
    core_1.Component({
        selector: 'services1',
        template: "<h2>Services Demo</h2>\n                <employee-list1></employee-list1>\n                <employee-details1></employee-details1>",
        providers: [app_employee_service1_1.EmployeeService1]
    })
], ServicesDemo1);
exports.ServicesDemo1 = ServicesDemo1;
//# sourceMappingURL=app.services.component1.js.map