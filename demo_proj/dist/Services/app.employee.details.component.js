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
var app_employee_service_1 = require("./app.employee.service");
var EmplooyeeDetailsComponent = (function () {
    function EmplooyeeDetailsComponent(_employeeService) {
        this._employeeService = _employeeService;
    }
    ;
    EmplooyeeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (empDetailData) { return _this.employeeDetails = empDetailData; }, function (resError) { return _this.errorMsg = resError; });
    };
    return EmplooyeeDetailsComponent;
}());
EmplooyeeDetailsComponent = __decorate([
    core_1.Component({
        selector: 'employee-details',
        template: "<h2>{{errorMsg}}</h2>\n                Employee Details :\n                <ul>\n                    <li *ngFor=\"let emp of employeeDetails\">\n                        {{emp.id}} {{emp.name}} {{emp.gender}}\n                    </li>\n                </ul>"
    }),
    __metadata("design:paramtypes", [app_employee_service_1.EmployeeService])
], EmplooyeeDetailsComponent);
exports.EmplooyeeDetailsComponent = EmplooyeeDetailsComponent;
//# sourceMappingURL=app.employee.details.component.js.map