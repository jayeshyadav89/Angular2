import {Component} from "@angular/core";

@Component({
    selector : 'template-driven-forms',
    templateUrl: 'demo_proj/Forms/Html/user_data_form.html',
    styles: [`input.ng-invalid{border-left:5px solid red}
        input.ng-valid{border-left:5px solid green}`]
})

export class TemplateDrivenFormsComp{
    public firstName="Test Name";

    onSubmit(value:any){
        console.log(value);
    }
}