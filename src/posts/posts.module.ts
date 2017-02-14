import {NgModule}                   from "@angular/core";
import {CommonModule}               from "@angular/common";
import {ReactiveFormsModule}        from "@angular/forms";
import {RouterModule}               from "@angular/router";

import {PostModule}                 from "../post/post.module";

import {PostsComponent}             from "./posts.component";
import {Posts__ListComponent}       from "./__list/posts__list.component";

import {postsRouting}               from "./posts.routing";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        PostModule,
        postsRouting
    ],
    declarations: [
        PostsComponent,
        Posts__ListComponent
    ],
    exports: [
        PostsComponent,
        Posts__ListComponent
    ]
})
export class PostsModule {

}