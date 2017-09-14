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
var DepartmentDetailsComponent = (function () {
    function DepartmentDetailsComponent(routes, router) {
        this.routes = routes;
        this.router = router;
    }
    ;
    DepartmentDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params.subscribe(function (params) {
            _this.departmentId = parseInt(params['id']);
        });
    };
    DepartmentDetailsComponent.prototype.goPrevious = function () {
        var prev_dept_id = this.departmentId - 1;
        this.router.navigate(['dept_list', prev_dept_id]);
    };
    DepartmentDetailsComponent.prototype.goNext = function () {
        var next_dept_id = this.departmentId + 1;
        this.router.navigate(['dept_list', next_dept_id]);
    };
    DepartmentDetailsComponent.prototype.gotoDepartment = function () {
        this.router.navigate(['/dept_list', { id: this.departmentId }]);
    };
    return DepartmentDetailsComponent;
}());
DepartmentDetailsComponent = __decorate([
    core_1.Component({
        template: "You have selected department : {{departmentId}}<br/>\n        <a (click)=\"goPrevious()\">Previous</a>    \n        <a (click)=\"goNext()\">Next</a>\n        <p>\n            <button (click)=\"gotoDepartment()\">Back</button>\n        </p>"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], DepartmentDetailsComponent);
exports.DepartmentDetailsComponent = DepartmentDetailsComponent;
//# sourceMappingURL=app.department.details.component.js.map