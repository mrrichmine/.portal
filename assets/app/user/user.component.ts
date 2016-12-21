import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";

import {User} from "./user.model";

@Component({
    selector: 'portal-auth',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit{
    user: User;

    constructor(private userService: UserService) {}

    isLoggedIn() {
        return this.userService.isLoggedIn()
    }

    ngOnInit() {
        const userId = localStorage.getItem('userId');
        this.userService.userdata(userId)
            .subscribe(
                (user: User) => {
                    this.user = user;
                }
            );
    }

}