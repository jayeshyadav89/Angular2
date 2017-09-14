import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {HelloWorldModule} from "./app.demo.module";
import {FormsDemoModule} from "./Forms/app.forms.module";
import {ServicesModule} from "./Services/app.services.module";
import {RoutingModule} from "./Routing/app.routing.module";

platformBrowserDynamic().bootstrapModule(RoutingModule);
