import {Component} from "@angular/core";
import {UserService} from "./user.service";
@Component({
    selector: 'portal-auth',
    templateUrl: 'user.component.html'
})
export class UserComponent {
    constructor(private userService: UserService) {}

    isLoggedIn() {
        return this.userService.isLoggedIn();
    }
}