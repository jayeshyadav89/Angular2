import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    selector : 'form-builder',
    templateUrl : 'demo_proj/Forms/Html/user_data_form_mdf.html',
    styles : [`input.ng-invalid{ border-left:5px solid red}
        input.ng-valid{ border-left:5px solid green}`]
})

export class FormBuilderComponent implements OnInit{
    userData : FormGroup;

    constructor(private _formBuilder:FormBuilder){};

    ngOnInit(){
        this.userData = this._formBuilder.group({
            fName : ['test5555', [Validators.required, Validators.minLength(4)]],
            lName : [],
            address : this._formBuilder.group({
                state : [],
                city : [],
                pCode : [null,[Validators.pattern("^[1-9][0-9]{4}$")]]
            })
        })
    }

    onSubmit(){
        console.log(this.userData.value);
    }
}