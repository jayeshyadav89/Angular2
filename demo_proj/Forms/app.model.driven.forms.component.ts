import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'model-driven',
    templateUrl: 'demo_proj/Forms/Html/user_data_form_mdf.html',
    styles : [`input.ng-invalid{ border-left:5px solid red }
        input.ng-valid{ border-left:5px solid green }`]
})

export class ModelDrivenFormsComp{
    userData = new FormGroup({
        fName : new FormControl(null, [Validators.required, Validators.minLength(4)]),
        lName : new FormControl(),
        address : new FormGroup({
            state : new FormControl(),
            city : new FormControl(),
            pCode : new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
        })
    });

    onSubmit(){
        console.log(this.userData.value);
    }
}