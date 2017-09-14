"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DirectivesDemoComp = (function () {
    function DirectivesDemoComp() {
        this.showData = true;
        this.color = "blue";
        this.colors = ['Green', 'Yellow', 'Blue', 'Red', 'White'];
    }
    return DirectivesDemoComp;
}());
DirectivesDemoComp = __decorate([
    core_1.Component({
        selector: 'directives-demo',
        template: " <h3> NgIf Directive </h3><br/>\n        <p *ngIf=\"showData\"> This NgIf directive, showData hai true. </p><br/>\n        <h3> NgSwitch Directive </h3><br/>\n        <div [ngSwitch]=\"color\">\n            <p *ngSwitchCase=\"'red'\"> This is red color. </p>\n            <p *ngSwitchCase=\"'blue'\"> This is blue color. </p>\n            <p *ngSwitchDefault> Invalid color name. </p>\n        </div><br/>\n        <h3> NgFor Directive </h3><br/>\n        <ul>\n            <li *ngFor=\"let clr of colors\">{{clr}}</li>\n        </ul>"
    })
], DirectivesDemoComp);
exports.DirectivesDemoComp = DirectivesDemoComp;
//# sourceMappingURL=app.directives.component.js.map