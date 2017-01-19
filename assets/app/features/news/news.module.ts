import {NgModule}               from "@angular/core";
import {CommonModule}           from "@angular/common";
import {ReactiveFormsModule}    from "@angular/forms";

import {ListComponent}          from "./list/list.component";
import {DetailsComponent}       from "./details/details.component";
import {PublishComponent}       from "./publish/publish.component";

import {newsRouting}            from "./news.routing";


@NgModule({
    declarations: [
        ListComponent,
        DetailsComponent,
        PublishComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        newsRouting
    ]
})
export class NewsModule {

}