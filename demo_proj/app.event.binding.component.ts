import {Component} from "@angular/core";

@Component({
    selector : 'event-binding',
    template : `<h1>Event Binding</h1>
        <input type="text" #inputValue/><br/>
        First Name : <input type="text" [(ngModel)] = "fName"/><br/>
        Last Name : <input type="text" [(ngModel)] = "lName"/><br/>
        Full Name : {{fName}} {{lName}}<br/>
        <button (click)="onClick($event, inputValue)">Click Me</button>`
})

export class EventBindingComponent{
    public fName:string;
    public lName:string;

    onClick(event:any, inputValue:any){
        console.log("Event Name :"+event);
        console.log("Input value :"+inputValue.value);
    }
}