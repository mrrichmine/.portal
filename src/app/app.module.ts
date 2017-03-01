import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from '@angular/http';
import { FormsModule }              from '@angular/forms';

import { LayoutModule }             from '../layout/layout.module';

import { AppComponent }             from './app.component';

import { UserService }              from '../user/user.service';
import { NewsService }              from '../news/news.service';
import { BranchesService }          from '../branches/branches.service';
import { CartridgeStoreService }    from '../cartridge-store/cartridge-store.service';


@NgModule ({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LayoutModule
    ],
    providers: [
        UserService,
        BranchesService,
        CartridgeStoreService,
        NewsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}