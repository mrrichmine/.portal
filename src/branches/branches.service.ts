import { Injectable }               from "@angular/core";
import { Http, Headers, Response }  from "@angular/http";
import { Observable }               from "rxjs";
import 'rxjs/Rx';

import { Branch } from "./branches.model";

@Injectable()
export class BranchesService {

    private branches: Branch[] =  [];

    constructor( private http: Http ) {}

    // Создание нового Филиала
    create
        ( branch: Branch ) {

        const body      = JSON.stringify( branch );
        const headers   = new Headers( { 'Content-Type': 'application/json' } );

        return this.http.post( 'http://10.10.3.158:3000/branch/create', body, { headers: headers } )
            .map    ( ( response: Response )    => response.json() )
            .catch  ( ( error: Response )       => Observable.throw( error.json() ) );
    }

    // Получение списка Филиалов
    get
        () {

        const headers   = new Headers( { 'Content-Type': 'application/json' } );

        return this.http.get( 'http://10.10.3.158:3000/branch/get', { headers: headers } )
            .map    ( ( response: Response )    => {

                const branches = response.json().obj;
                let recievedBranches: Branch[] = [];

                for (let branch of branches) {
                    recievedBranches.push(
                        new Branch(
                            branch.name,
                            branch.address,
                            branch.cartridge_store
                        )
                    );
                }
                this.branches = recievedBranches;
                return recievedBranches
            } )
            .catch  ( ( error: Response )       => Observable.throw( error.json() ) );
    }

}
