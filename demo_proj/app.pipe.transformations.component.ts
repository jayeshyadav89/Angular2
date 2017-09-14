import {Component} from "@angular/core";

@Component({
    selector :'pipe-transformation',
    template :` <h2> Demo For Pipe Transformation </h2>
        <h1>{{demoText | uppercase}} </h1>
        <h1>{{demoText | lowercase}} </h1>
        <h1>{{demoText | slice:2:5}} </h1>
        
        <h1>{{demoNumber | number:'2.2-3'}} </h1>
        <h1>{{demoNumber | number:'1.1-1'}} </h1>
        <h1>{{demoNumber | number:'3.2-5'}} </h1>
        <h1>{{demoNumber | number:'2.1-1'}} </h1>
        <h1>{{demoNumber | number:'2.4-6'}} </h1>
        
        <h1>{{demoNumber | currency:'ERO'}} </h1>
        <h1>{{demoNumber | currency:'USD':true}} </h1>

        <h1>{{demoDate}} </h1>
        <h1>{{demoDate | date:'fullDate'}} </h1>
        <h1>{{demoDate | date:'mediumDate'}} </h1>
        <h1>{{demoDate | date:'shortDate'}} </h1>
        <h1>{{demoDate | date:'shortTime'}} </h1>
        <h1>{{demoDate | date:'mediumTime'}} </h1>`

})

export class PipeTransformationComp{
    public demoText ="This_is demo text.";
    public demoNumber = 12.648;
    public demoDate = new Date();
}