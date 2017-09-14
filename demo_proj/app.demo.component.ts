import {Component} from "@angular/core";

@Component({
    selector : 'my-app',
    template : `{{title}} <h1>Hello World</h1>
        <h4>This is from main component.</h4>
        <child-comp></child-comp> 
        <div [class.myClass]="applyMyClass">Apply Class</div>
        <div [style.color]="applyRed ? 'red' : 'blue'">Conditional Apply</div>`,
    styles : [`h4{color:green;}
    .myClass{color:orange;}`]
})

export class HelloWorldComp{
    public title = "Test data";
    public applyMyClass = true;
    public applyRed = false;
}
