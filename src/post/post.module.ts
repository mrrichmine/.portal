import {NgModule}               from "@angular/core";
import {CommonModule}           from "@angular/common";
import {ReactiveFormsModule}    from "@angular/forms";

import {Post__DetailsComponent} from "./__details/post__details.component";
import {Posts__PublishComponent} from "../posts/__publish/posts__publish.component";

import {PostComponent}           from "./post.component";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        PostComponent,
        Post__DetailsComponent,
        Posts__PublishComponent
    ],
    exports: [
        PostComponent,
        Post__DetailsComponent,
        Posts__PublishComponent
    ]
})
export class PostModule {

}