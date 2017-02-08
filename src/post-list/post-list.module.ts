import {NgModule}                   from "@angular/core";
import {CommonModule}               from "@angular/common";
import {ReactiveFormsModule}        from "@angular/forms";
import {RouterModule}               from "@angular/router";

import {PostModule}                 from "../post/post.module";

import {PostListComponent}          from "./post-list.component";
import {PostList__ListComponent}    from "./__list/post-list__list.component";

import {postsRouting}               from "./post-list.routing";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        PostModule,
        postsRouting
    ],
    declarations: [
        PostListComponent,
        PostList__ListComponent
    ],
    exports: [
        PostListComponent,
        PostList__ListComponent
    ]
})
export class PostListModule {

}