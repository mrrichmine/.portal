import {Component} from "@angular/core";
import {UserService} from "./user/user.service";

@Component({
    selector: 'portal-main',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private userService: UserService){}

    isLoggedIn() {
        return this.userService.isLoggedIn();
    }
}