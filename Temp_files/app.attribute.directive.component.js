"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AttributeDirectiveComponent = (function () {
    function AttributeDirectiveComponent() {
        this.cone = true;
        this.ctwo = false;
        this.style = 'Italic';
        this.size = '30px';
    }
    AttributeDirectiveComponent.prototype.toggle = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    return AttributeDirectiveComponent;
}());
AttributeDirectiveComponent = __decorate([
    core_1.Component({
        selector: 'attribute-directive',
        template: " <h2> Attribute Directive Demo </h2>\n        <p [ngClass]=\"{classOne:cone, classTwo:ctwo}\">NgClass demo paragraph</p>\n        <button (click)=\"toggle()\">Toggle</button><br/>\n        <h3> NgStyle directive</h3>\n        <p [ngStyle]=\"{'font-style':style, 'font-size':size}\">NgStyle demo paragraph </p>",
        styles: [".classOne{color:red} \n        .classTwo{background-color:black}"]
    })
], AttributeDirectiveComponent);
exports.AttributeDirectiveComponent = AttributeDirectiveComponent;
//# sourceMappingURL=app.attribute.directive.component.js.map