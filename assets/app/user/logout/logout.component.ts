import {Component}  from "@angular/core";
import {Router}     from "@angular/router";

import {UserService} from "../user.service";
@Component({
    selector: 'portal-auth-logout',
    templateUrl: './logout.component.html'
})
export class LogoutComponent {

    constructor(private userService: UserService, private router: Router) {}

    onReturn() {
        this.router.navigateByUrl('/');
    }

    logout() {
        this.router.navigateByUrl('/');
        return this.userService.logout()
    }
}