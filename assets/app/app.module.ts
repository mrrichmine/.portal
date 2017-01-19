import {NgModule}        from "@angular/core";
import {BrowserModule}   from "@angular/platform-browser";
import {HttpModule}      from "@angular/http";
import {FormsModule}     from "@angular/forms";

import {ViewModule}      from "./views/view.module";

import {AppComponent}    from "./app.component";

import {UserService}     from "./features/users/user.service";
import {NewsService}     from "./features/news/news.service";


@NgModule ({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ViewModule
    ],
    providers: [
        UserService,
        NewsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}