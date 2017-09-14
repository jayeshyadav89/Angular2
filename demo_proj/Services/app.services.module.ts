import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ServicesComponent} from "./app.services.component";
import {EmployeeListComponent} from "./app.employee.list.component";
import {EmplooyeeDetailsComponent} from "./app.employee.details.component";
import {HttpModule} from "@angular/http";

@NgModule({
    imports : [BrowserModule, HttpModule],
    declarations : [ServicesComponent, EmployeeListComponent, EmplooyeeDetailsComponent],
    bootstrap : [ServicesComponent]
})

export class ServicesModule{
}