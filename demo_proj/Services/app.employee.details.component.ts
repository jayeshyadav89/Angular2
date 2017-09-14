import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./app.employee.service";

@Component({
    selector : 'employee-details',
    template : `<h2>{{errorMsg}}</h2>
                Employee Details :
                <ul>
                    <li *ngFor="let emp of employeeDetails">
                        {{emp.id}} {{emp.name}} {{emp.gender}}
                    </li>
                </ul>`
})

export class EmplooyeeDetailsComponent implements OnInit{
    employeeDetails:any[];
    errorMsg:string;
    constructor(private _employeeService:EmployeeService){};

    ngOnInit(){
        this._employeeService.getEmployees()
            .subscribe(empDetailData => this.employeeDetails = empDetailData, resError => this.errorMsg = resError);
    }
}