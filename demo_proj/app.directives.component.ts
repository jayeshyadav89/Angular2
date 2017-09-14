import {Component} from "@angular/core";

@Component({
    selector : 'directives-demo',
    template : ` <h3> NgIf Directive </h3><br/>
        <p *ngIf="showData"> This NgIf directive, showData hai true. </p><br/>
        <h3> NgSwitch Directive </h3><br/>
        <div [ngSwitch]="color">
            <p *ngSwitchCase="'red'"> This is red color. </p>
            <p *ngSwitchCase="'blue'"> This is blue color. </p>
            <p *ngSwitchDefault> Invalid color name. </p>
        </div><br/>
        <h3> NgFor Directive </h3><br/>
        <ul>
            <li *ngFor="let clr of colors">{{clr}}</li>
        </ul>`
})

export class DirectivesDemoComp{
    public showData = true;
    public color = "blue";
    public colors = ['Green','Yellow','Blue','Red','White'];
}