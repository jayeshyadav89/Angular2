"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EventBindingComponent = (function () {
    function EventBindingComponent() {
    }
    EventBindingComponent.prototype.onClick = function (event, inputValue) {
        console.log("Event Name :" + event);
        console.log("Input value :" + inputValue.value);
    };
    return EventBindingComponent;
}());
EventBindingComponent = __decorate([
    core_1.Component({
        selector: 'event-binding',
        template: "<h1>Event Binding</h1>\n        <input type=\"text\" #inputValue/><br/>\n        First Name : <input type=\"text\" [(ngModel)] = \"fName\"/><br/>\n        Last Name : <input type=\"text\" [(ngModel)] = \"lName\"/><br/>\n        Full Name : {{fName}} {{lName}}<br/>\n        <button (click)=\"onClick($event, inputValue)\">Click Me</button>"
    })
], EventBindingComponent);
exports.EventBindingComponent = EventBindingComponent;
//# sourceMappingURL=app.event.binding.component.js.map