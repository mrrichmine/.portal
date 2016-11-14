import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";

@NgModule ({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}