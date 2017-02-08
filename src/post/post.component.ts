import {Component} from "@angular/core/";

import {Post} from "./post.model";

@Component({
    selector: 'post-template',
    templateUrl: './post.component.html'
})
export class PostComponent {
    post: Post;
}
