import { Injectable }               from '@angular/core';
import { Http, Headers, Response }  from '@angular/http';
import { Observable }               from 'rxjs';
import 'rxjs/Rx';

import { Branch }                   from '../branches/branches.model';
import { CartridgeStore }           from './cartridge-store.model';

@Injectable()
export class CartridgeStoreService {

    private cartridge_store: CartridgeStore[] =  [];

    constructor( private http: Http ) {}

    // Создание нового Хранилища Картриджей
    add
    ( branch: Branch ) {

        const body      = JSON.stringify( branch );
        const headers   = new Headers( { 'Content-Type': 'application/json' } );

        return this.http.post( 'http://10.10.3.158:3000/cartridge_store/add', body, { headers: headers } )
            .map    ( ( response: Response )    => response.json() )
            .catch  ( ( error: Response )       => Observable.throw( error.json() ) );
    } // add
}
