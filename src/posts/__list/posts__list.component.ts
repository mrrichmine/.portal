import {Component, OnInit} from "@angular/core/";

import {PostService} from "../../post/post.service";

import {Post} from "../../post/post.model";

@Component({
    selector: 'posts__list',
    templateUrl: './posts__list.component.html'
})
export class Posts__ListComponent implements OnInit{
    posts: Post[];

    constructor (
        private postService: PostService
    ) {}

    ngOnInit() {
        this.postService.getPosts()
            .subscribe(
                (posts: Post[]) => {
                    this.posts = posts;
                    return this.posts
                }
            );
    }
}