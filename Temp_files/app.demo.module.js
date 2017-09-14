"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var app_demo_component_1 = require("./app.demo.component");
var platform_browser_1 = require("@angular/platform-browser");
var app_child_component_1 = require("./app.child.component");
var app_event_binding_component_1 = require("./app.event.binding.component");
var forms_1 = require("@angular/forms");
var app_directives_component_1 = require("./app.directives.component");
var common_1 = require("@angular/common");
var app_attribute_directive_component_1 = require("./app.attribute.directive.component");
var app_pipe_transformations_component_1 = require("./app.pipe.transformations.component");
var HelloWorldModule = (function () {
    function HelloWorldModule() {
    }
    return HelloWorldModule;
}());
HelloWorldModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, common_1.CommonModule],
        declarations: [app_demo_component_1.HelloWorldComp, app_child_component_1.ChildComponent, app_event_binding_component_1.EventBindingComponent, app_directives_component_1.DirectivesDemoComp,
            app_attribute_directive_component_1.AttributeDirectiveComponent, app_pipe_transformations_component_1.PipeTransformationComp],
        bootstrap: [app_pipe_transformations_component_1.PipeTransformationComp]
    })
], HelloWorldModule);
exports.HelloWorldModule = HelloWorldModule;
//# sourceMappingURL=app.demo.module.js.map