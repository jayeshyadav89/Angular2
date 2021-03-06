"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_component_1 = require("./app.routing.component");
var http_1 = require("@angular/http");
var app_approuting_module_1 = require("./app.approuting.module");
var app_approuting_module_2 = require("./app.approuting.module");
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_approuting_module_1.AppRoutingModule],
        declarations: [app_routing_component_1.RoutingComponent, app_approuting_module_2.routingComponents],
        bootstrap: [app_routing_component_1.RoutingComponent]
    })
], RoutingModule);
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=app.routing.module.js.map