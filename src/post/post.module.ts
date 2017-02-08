import {NgModule}               from "@angular/core";
import {CommonModule}           from "@angular/common";
import {ReactiveFormsModule}    from "@angular/forms";

import {Post__DetailsComponent} from "./__details/post__details.component";
import {Post__PublishComponent} from "../post-list/__publish/post-list__publish.component";
import {PostComponent}           from "./post.component";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        PostComponent,
        Post__DetailsComponent,
        Post__PublishComponent
    ],
    exports: [
        PostComponent,
        Post__DetailsComponent,
        Post__PublishComponent
    ]
})
export class PostModule {

}