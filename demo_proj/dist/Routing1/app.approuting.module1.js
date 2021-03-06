"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_employee_details_component_1 = require("../Services/app.employee.details.component");
var app_employee_list_component_1 = require("../Services/app.employee.list.component");
var app_department_details_component1_1 = require("./app.department.details.component1");
var app_department_list_component1_1 = require("./app.department.list.component1");
var route = [{ path: 'emp_list', component: app_employee_list_component_1.EmployeeListComponent },
    { path: 'emp_details', component: app_employee_details_component_1.EmplooyeeDetailsComponent },
    { path: 'dept_list', component: app_department_list_component1_1.DepartmentListComponent1 },
    { path: 'dept_list/:id', component: app_department_details_component1_1.DepartmentDetailsComponent1 }];
var AppRoutingModule1 = (function () {
    function AppRoutingModule1() {
    }
    return AppRoutingModule1;
}());
AppRoutingModule1 = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(route)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule1);
exports.AppRoutingModule1 = AppRoutingModule1;
exports.routingComponent = [app_employee_list_component_1.EmployeeListComponent, app_employee_details_component_1.EmplooyeeDetailsComponent, app_department_list_component1_1.DepartmentListComponent1,
    app_department_details_component1_1.DepartmentDetailsComponent1];
//# sourceMappingURL=app.approuting.module1.js.map