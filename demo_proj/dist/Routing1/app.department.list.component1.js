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
var router_1 = require("@angular/router");
var DepartmentListComponent1 = (function () {
    function DepartmentListComponent1(router) {
        this.router = router;
        this.deptList = [{ id: 111, name: "test dept111" },
            { id: 112, name: "test dept112" },
            { id: 113, name: "test dept13" },
            { id: 114, name: "test dept114" }];
    }
    ;
    DepartmentListComponent1.prototype.onIdClick = function (dept) {
        this.router.navigate(['/dept_list', dept.id]);
    };
    return DepartmentListComponent1;
}());
DepartmentListComponent1 = __decorate([
    core_1.Component({
        selector: 'dept_list1',
        template: "<h2> Department List </h2>\n        <ul class=\"items\">\n            <li *ngFor=\"let dept of deptList\">\n                <span (click)=\"onIdClick(dept)\" class=\"badge\">{{dept.id}}</span>{{dept.name}}\n            </li>\n        </ul>"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], DepartmentListComponent1);
exports.DepartmentListComponent1 = DepartmentListComponent1;
//# sourceMappingURL=app.department.list.component1.js.map