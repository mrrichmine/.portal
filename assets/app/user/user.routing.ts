import {Routes, RouterModule}   from "@angular/router";

import {UserComponent}          from "./user.component";
import {SignupComponent}        from "./signup/signup.component";
import {SigninComponent}        from "./signin/signin.component";
import {LogoutComponent}        from "./logout/logout.component";

const USER_ROUTING: Routes = [
    {   path: '',
        component: UserComponent,
        pathMatch: 'full'
    },
    {   path: 'user',
        component: UserComponent
    },
    {   path: 'signup',
        component: SignupComponent
    },
    {   path: 'signin',
        component: SigninComponent
    },
    {   path: 'logout',
        component: LogoutComponent
    }
];

export const userRouting = RouterModule.forChild(USER_ROUTING);