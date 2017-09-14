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
var app_employee_service1_1 = require("./app.employee.service1");
var EmployeeListComp1 = (function () {
    function EmployeeListComp1(_employeeService) {
        this._employeeService = _employeeService;
    }
    ;
    EmployeeListComp1.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployee().subscribe(function (empData) { return _this.employees = empData; }, function (resError) { return _this.errorMsg = resError; });
    };
    return EmployeeListComp1;
}());
EmployeeListComp1 = __decorate([
    core_1.Component({
        selector: 'employee-list1',
        template: "Employee List :\n                <h3>{{errorMsg}}</h3>\n                    <ul>\n                        <li *ngFor=\"let emp of employees\">{{emp.name}}</li>\n                    </ul>"
    }),
    __metadata("design:paramtypes", [app_employee_service1_1.EmployeeService1])
], EmployeeListComp1);
exports.EmployeeListComp1 = EmployeeListComp1;
//# sourceMappingURL=app.employee.list.component1.js.map