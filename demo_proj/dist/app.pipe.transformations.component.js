"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PipeTransformationComp = (function () {
    function PipeTransformationComp() {
        this.demoText = "This_is demo text.";
        this.demoNumber = 12.648;
        this.demoDate = new Date();
    }
    return PipeTransformationComp;
}());
PipeTransformationComp = __decorate([
    core_1.Component({
        selector: 'pipe-transformation',
        template: " <h2> Demo For Pipe Transformation </h2>\n        <h1>{{demoText | uppercase}} </h1>\n        <h1>{{demoText | lowercase}} </h1>\n        <h1>{{demoText | slice:2:5}} </h1>\n        \n        <h1>{{demoNumber | number:'2.2-3'}} </h1>\n        <h1>{{demoNumber | number:'1.1-1'}} </h1>\n        <h1>{{demoNumber | number:'3.2-5'}} </h1>\n        <h1>{{demoNumber | number:'2.1-1'}} </h1>\n        <h1>{{demoNumber | number:'2.4-6'}} </h1>\n        \n        <h1>{{demoNumber | currency:'ERO'}} </h1>\n        <h1>{{demoNumber | currency:'USD':true}} </h1>\n\n        <h1>{{demoDate}} </h1>\n        <h1>{{demoDate | date:'fullDate'}} </h1>\n        <h1>{{demoDate | date:'mediumDate'}} </h1>\n        <h1>{{demoDate | date:'shortDate'}} </h1>\n        <h1>{{demoDate | date:'shortTime'}} </h1>\n        <h1>{{demoDate | date:'mediumTime'}} </h1>"
    })
], PipeTransformationComp);
exports.PipeTransformationComp = PipeTransformationComp;
//# sourceMappingURL=app.pipe.transformations.component.js.map