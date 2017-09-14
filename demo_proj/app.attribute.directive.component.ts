import {Component} from "@angular/core";

@Component({
    selector : 'attribute-directive',
    template : ` <h2> Attribute Directive Demo </h2>
        <p [ngClass]="{classOne:cone, classTwo:ctwo}">NgClass demo paragraph</p>
        <button (click)="toggle()">Toggle</button><br/>
        <h3> NgStyle directive</h3>
        <p [ngStyle]="{'font-style':style, 'font-size':size}">NgStyle demo paragraph </p>`,
    styles : [`.classOne{color:red} 
        .classTwo{background-color:black}`]
})

export class AttributeDirectiveComponent{
    public cone = true;
    public ctwo = false;
    public style = 'Italic';
    public size = '30px';

    toggle(){
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }
}
