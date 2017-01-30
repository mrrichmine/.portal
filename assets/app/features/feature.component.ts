import {Component, OnInit} from "@angular/core/";
import {UserService} from "./users/user.service";

import {User} from "./users/user.model";

@Component({
    selector: 'portal-feature',
    templateUrl: 'feature.component.html'
})
export class FeatureComponent implements OnInit{
    user: User;

    constructor(private userService: UserService){}

    isLoggedIn() {
        return this.userService.isLoggedIn()
    }

    ngOnInit() {
        const userId = localStorage.getItem('userId');
        if (userId != null) {
            this.userService.getUserdata(userId)
                .subscribe(
                    (user: User) => {
                        this.user = user;
                    }
                );
            return this.user;
        }
    }
}