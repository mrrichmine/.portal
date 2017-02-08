import {Component, OnInit} from "@angular/core/";

import {PostService} from "../../post/post.service";

import {Post} from "../../post/post.model";

@Component({
    selector: 'post-list__list',
    template: `<post-template *ngFor="let post of posts"></post-template>`
})
export class PostList__ListComponent implements OnInit{
    posts: Post[];

    constructor (
        private postService: PostService
    ) {}

    ngOnInit() {
        this.postService.getPosts()
            .subscribe(
                (posts: Post[]) => {
                    this.posts = posts
                }
            );
    }
}