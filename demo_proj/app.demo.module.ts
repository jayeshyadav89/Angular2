import {NgModule} from "@angular/core";
import {HelloWorldComp} from "./app.demo.component";
import {BrowserModule} from "@angular/platform-browser";
import {ChildComponent} from "./app.child.component";
import {EventBindingComponent} from "./app.event.binding.component";
import {FormsModule} from "@angular/forms";
import {DirectivesDemoComp} from "./app.directives.component";
import {CommonModule} from "@angular/common";
import {AttributeDirectiveComponent} from "./app.attribute.directive.component";
import {PipeTransformationComp} from "./app.pipe.transformations.component";

@NgModule({
    imports : [BrowserModule, FormsModule, CommonModule],
    declarations : [HelloWorldComp, ChildComponent, EventBindingComponent, DirectivesDemoComp, 
        AttributeDirectiveComponent, PipeTransformationComp],
    bootstrap : [PipeTransformationComp]
})

export class HelloWorldModule{

}
