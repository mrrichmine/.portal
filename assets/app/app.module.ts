import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {AuthComponent} from "./auth/auth.component";
import {HeaderComponent} from "./header.component";



@NgModule ({
    declarations: [
        AppComponent,
        AuthComponent,
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