import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EmplooyeeDetailsComponent} from "../Services/app.employee.details.component";
import {EmployeeListComponent} from "../Services/app.employee.list.component";
import {DepartmentListComponent} from "./app.department.list.component";
import {DepartmentDetailsComponent} from "./app.department.details.component";

const routes: Routes = [{path:'emp_list', component:EmployeeListComponent},
        {path:'emp_details', component:EmplooyeeDetailsComponent},
        {path:'dept_list', component:DepartmentListComponent},
        {path:'dept_list/:id', component:DepartmentDetailsComponent}];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{
}

export const routingComponents = [EmplooyeeDetailsComponent, EmployeeListComponent, DepartmentListComponent, DepartmentDetailsComponent]