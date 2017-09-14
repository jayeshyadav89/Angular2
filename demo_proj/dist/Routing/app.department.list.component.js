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
var DepartmentListComponent = (function () {
    function DepartmentListComponent(route, actRoute) {
        this.route = route;
        this.actRoute = actRoute;
        this.deptList = [{ id: "11", name: "dept1" },
            { id: "12", name: "dept2" },
            { id: "13", name: "dept3" },
            { id: "14", name: "dept4" }];
    }
    ;
    DepartmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (params) {
            var deptId = parseInt(params['id']);
            _this.selectedId = deptId;
        });
    };
    DepartmentListComponent.prototype.onDeptIdClick = function (dept) {
        this.route.navigate(['/dept_list', dept.id]);
    };
    DepartmentListComponent.prototype.isSelected = function (dept) {
        return this.selectedId === dept.id;
    };
    return DepartmentListComponent;
}());
DepartmentListComponent = __decorate([
    core_1.Component({
        selector: 'dept-list',
        template: "<h2> Department List </h2>\n        <ul class=\"items\">\n            <li (click)=\"onDeptIdClick(dept)\" [class.selected]=\"isSelected(dept)\" *ngFor=\"let dept of deptList\">\n                <span class=\"badge\">{{dept.id}}</span> {{dept.name}}\n            </li>\n        </ul>"
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], DepartmentListComponent);
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=app.department.list.component.js.map