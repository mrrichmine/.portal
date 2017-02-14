import {Component, Input}   from "@angular/core/";

import {Post}               from "./post.model";

@Component({
    selector: 'post',
    templateUrl: './post.component.html'
})
export class PostComponent {
    @Input() post: Post;
}
