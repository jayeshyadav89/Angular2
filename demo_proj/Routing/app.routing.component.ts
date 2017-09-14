import {Component} from "@angular/core";
import {EmployeeService} from "../Services/app.employee.service";

@Component({
    selector : 'router-comp',
    template : `<h2>Routing Demo</h2>
            <nav>
                <a  routerLink="emp_list" routerLinkActive="active">Employee List</a>
                <a  routerLink="emp_details" routerLinkActive="active">Employee Details</a>
                <a  routerLink="dept_list" routerLinkActive="active">Department List</a>
            </nav>
            <router-outlet></router-outlet>`,
    styles : [`nav a.active{color:red;}`],
    providers : [EmployeeService]
})

export class RoutingComponent{
}