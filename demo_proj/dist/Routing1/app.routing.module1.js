"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_component1_1 = require("./app.routing.component1");
var app_approuting_module1_1 = require("./app.approuting.module1");
var app_approuting_module1_2 = require("./app.approuting.module1");
var http_1 = require("@angular/http");
var RoutingModule1 = (function () {
    function RoutingModule1() {
    }
    return RoutingModule1;
}());
RoutingModule1 = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_approuting_module1_1.AppRoutingModule1, http_1.HttpModule],
        declarations: [app_routing_component1_1.RoutingComponent1, app_approuting_module1_2.routingComponent],
        bootstrap: [app_routing_component1_1.RoutingComponent1]
    })
], RoutingModule1);
exports.RoutingModule1 = RoutingModule1;
//# sourceMappingURL=app.routing.module1.js.map