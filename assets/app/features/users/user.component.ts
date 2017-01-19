import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "./user.service";

import {User} from "./user.model";

@Component({
    selector: 'portal-user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit{
    user: User;

    constructor(private userService: UserService, private router: Router) {}

    isLoggedIn() {
        return this.userService.isLoggedIn()
    }

    logout() {
        this.router.navigateByUrl('/');
        return this.userService.logout()
    }

    ngOnInit() {
        const userId = localStorage.getItem('userId');
        this.userService.getUserdata(userId)
            .subscribe(
                (user: User) => {
                    this.user = user;
                }
            );
    }
}