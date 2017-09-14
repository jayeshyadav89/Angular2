"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var app_employee_service_1 = require("../Services/app.employee.service");
var RoutingComponent1 = (function () {
    function RoutingComponent1() {
    }
    return RoutingComponent1;
}());
RoutingComponent1 = __decorate([
    core_1.Component({
        selector: 'routing-module1',
        template: "<h2> Routing Demo</h2>\n        <nav>\n            <a routerLink=\"emp_list\" routerLinkActive=\"active\">Employee List</a>\n            <a routerLink=\"emp_details\" routerLinkActive=\"active\">Employee Details</a>\n            <a routerLink=\"dept_list\" routerLinkActive=\"active\">Department List</a>\n        </nav>\n        <router-outlet></router-outlet>",
        providers: [app_employee_service_1.EmployeeService],
        styles: ["nav a.active{color:red};"]
    })
], RoutingComponent1);
exports.RoutingComponent1 = RoutingComponent1;
//# sourceMappingURL=app.routing.component1.js.map