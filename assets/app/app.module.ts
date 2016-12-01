import {NgModule}        from "@angular/core";
import {BrowserModule}   from "@angular/platform-browser";
import {HttpModule}      from "@angular/http";
import {FormsModule}     from "@angular/forms";
import {AuthModule}      from "./auth/auth.module";

import {AppComponent}    from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {BrandComponent}  from "./header/brand/brand.component";
import {MenuComponent}   from "./header/menu/menu.component";
import {FooterComponent} from "./footer/footer.component";
import {AuthComponent}   from "./auth/auth.component";

import {appRouting}      from "./app.routing";
import {AuthService}     from "./auth/auth.service";


@NgModule ({
    declarations: [
        AppComponent,
        AuthComponent,
        HeaderComponent,
        BrandComponent,
        MenuComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AuthModule,
        appRouting
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}