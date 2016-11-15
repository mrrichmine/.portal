import {Component} from "@angular/core";
@Component({
    selector: 'portal-auth',
    template: `
        <div class="row spacing">
                        
            <router-outlet></router-outlet>
        </div>
`
})
export class AuthComponent {

}