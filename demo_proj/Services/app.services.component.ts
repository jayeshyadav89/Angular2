import {Component} from "@angular/core";
import {EmployeeService} from "./app.employee.service";

@Component({
    selector : 'services-demo',
    template : `<h2> Service Demo</h2>
        <employee-list></employee-list>
        <employee-details></employee-details>`,
    providers : [EmployeeService]
})

export class ServicesComponent{
}