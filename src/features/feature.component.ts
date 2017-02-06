import {Component, OnInit} from "@angular/core/";
import {UserService} from "../user/user.service";

import {User} from "../user/user.model";

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

    getUserId(){
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

    ngOnInit() {
        this.getUserId();
    }
}