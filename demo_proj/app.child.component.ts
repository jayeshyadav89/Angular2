import {Component} from "@angular/core";

@Component({
    selector : 'child-comp',
    template : `This is child component.
    <h4>Styles from child component</h4>`,
    styles : [`h4{
        color : red;
    }`]
})

export class ChildComponent{
}