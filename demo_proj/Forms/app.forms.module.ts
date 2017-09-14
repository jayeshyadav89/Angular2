import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TemplateDrivenFormsComp} from "./app.template.driven.forms.component";
import {ModelDrivenFormsComp} from "./app.model.driven.forms.component";
import {FormBuilderComponent} from "./app.formbuilder.component";

@NgModule({
    imports : [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations : [FormBuilderComponent],
    bootstrap : [FormBuilderComponent]
})

export class FormsDemoModule{
}