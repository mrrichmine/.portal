import {NgModule}               from "@angular/core";
import {CommonModule}           from "@angular/common";
import {ReactiveFormsModule}    from "@angular/forms";

import {News__ListComponent}    from "./__list/news__list.component";
import {News__DetailsComponent} from "./__details/news__details.component";
import {News__PublishComponent} from "./__publish/news__publish.component";

import {newsRouting}            from "./news.routing";


@NgModule({
    declarations: [
        News__ListComponent,
        News__DetailsComponent,
        News__PublishComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        newsRouting
    ]
})
export class NewsModule {

}