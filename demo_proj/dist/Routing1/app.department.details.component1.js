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
var DepartmentDetailsComponent1 = (function () {
    function DepartmentDetailsComponent1(actRoute, router) {
        this.actRoute = actRoute;
        this.router = router;
    }
    ;
    DepartmentDetailsComponent1.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (params) { return _this.departmenId = parseInt(params['id']); });
    };
    DepartmentDetailsComponent1.prototype.goNext = function () {
        var nextDeptId = this.departmenId + 1;
        this.router.navigate(['/dept_list', nextDeptId]);
    };
    DepartmentDetailsComponent1.prototype.goPrevious = function () {
        var prevDeptId = this.departmenId - 1;
        this.router.navigate(['/dept_list', prevDeptId]);
    };
    return DepartmentDetailsComponent1;
}());
DepartmentDetailsComponent1 = __decorate([
    core_1.Component({
        template: "You clicked on department id = {{departmenId}}<br/>\n        <a (click)=\"goPrevious()\" class=\"btn btn-primary\">Previous</a>\n        <a (click)=\"goNext()\" class=\"btn btn-primary\">Next</a>"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], DepartmentDetailsComponent1);
exports.DepartmentDetailsComponent1 = DepartmentDetailsComponent1;
//# sourceMappingURL=app.department.details.component1.js.map