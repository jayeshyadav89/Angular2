import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./app.employee.service";

@Component({
    selector : 'employee-list',
    template : `<h2>{{errorMsg}}</h2>
                Employee List :
                <ul>
                    <li *ngFor="let emp of employees">{{emp.name}}</li>
                </ul>`
})

export class EmployeeListComponent implements OnInit{
    employees:any[];
    errorMsg:string;
    constructor(private _employeeService:EmployeeService){};

    ngOnInit(){
       this._employeeService.getEmployees()
        .subscribe(resEmpData => this.employees = resEmpData, errorResp => this.errorMsg = errorResp);
    }
}