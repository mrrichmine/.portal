import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { News } from "./news.model";

@Injectable()
export class NewsService {
    constructor(private http: Http) {}

    getNews(news: News) {
        const body = JSON.stringify(news);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get('http://10.10.3.158:3000/news/', {headers: headers})
            .map((response: Response) => response.json().news as News)
            .catch((error: Response) => Observable.throw(error.json()));
    }

    postNews(news: News) {
        const body = JSON.stringify(news);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://10.10.3.158:3000/news/', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }



}