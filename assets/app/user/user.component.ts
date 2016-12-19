import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";

import {User} from "./user.model";
import {Userid} from "./userid.model";

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
        const userid = new Userid(
            localStorage.getItem('userId')
        );
        this.userService.userdata(userid)
            .subscribe(
                (user: User) => {
                    this.user = user;
                }
            );
    }

}