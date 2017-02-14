import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Post } from "./post.model";

@Injectable()
export class PostService {
    private posts: Post[] = [];

    constructor(private http: Http) {}

    addPost(post: Post) {
        const body = JSON.stringify(post);
        const headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
        return this.http.post('http://10.10.3.158:3000/posts/', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getPosts() {
        const headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
        return this.http.get('http://10.10.3.158:3000/posts/', {headers: headers})
            .map((response: Response) => {
                const posts = response.json().obj;
                let transformedPosts: Post[] = [];
                for (let post of posts) {
                    transformedPosts.push(new Post(
                        post.header,
                        post.text,
                        post.creator)
                    );
                }
                this.posts = transformedPosts;
                return transformedPosts;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
