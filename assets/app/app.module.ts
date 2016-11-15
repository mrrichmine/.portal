import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header.component";
import {AuthComponent} from "./auth/auth.component";

@NgModule ({
    declarations: [
        AppComponent,
        HeaderComponent,
        AuthComponent
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