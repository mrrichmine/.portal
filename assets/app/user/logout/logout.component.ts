import {Component} from "@angular/core";
import {UserService} from "../user.service";
@Component({
    selector: 'portal-auth-logout',
    templateUrl: 'logout.component.html'
})
export class LogoutComponent {
    constructor(private userService: UserService) {}

    logout() {
        return this.userService.logout();
    }
}