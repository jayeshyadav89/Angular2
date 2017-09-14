import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RoutingComponent} from "./app.routing.component";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app.approuting.module";
import {routingComponents} from "./app.approuting.module";

@NgModule({
    imports : [BrowserModule, HttpModule, AppRoutingModule],
    declarations : [RoutingComponent, routingComponents],
    bootstrap : [RoutingComponent]
})

export class RoutingModule{
}   