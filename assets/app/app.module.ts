import {NgModule}        from "@angular/core";
import {BrowserModule}   from "@angular/platform-browser";
import {HttpModule}      from "@angular/http";
import {FormsModule}     from "@angular/forms";
import {UserModule}      from "./user/user.module";

import {AppComponent}    from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {BrandComponent}  from "./header/brand/brand.component";
import {MenuComponent}   from "./header/menu/menu.component";
import {FooterComponent} from "./footer/footer.component";
import {UserComponent}   from "./user/user.component";

import {appRouting}      from "./app.routing";
import {UserService}     from "./user/user.service";


@NgModule ({
    declarations: [
        AppComponent,
        UserComponent,
        HeaderComponent,
        BrandComponent,
        MenuComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        UserModule,
        appRouting
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}