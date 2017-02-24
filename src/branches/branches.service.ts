import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Branch } from "./branches.model";

@Injectable()
export class BranchesService {

    constructor( private http: Http ) {}

    create( branch: Branch ) {

        const body      = JSON.stringify( branch );
        const headers   = new Headers( { 'Content-Type': 'application/json' } );

        return this.http.post( 'http://10.10.3.158:3000/branch/create', body, { headers: headers } )
            .map    ( ( response: Response )    => response.json() )
            .catch  ( ( error: Response )       => Observable.throw( error.json() ) );
    }
}
