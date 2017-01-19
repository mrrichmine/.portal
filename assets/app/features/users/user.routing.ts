import {Routes, RouterModule}   from "@angular/router";

import {BlankComponent}         from "../../views/blank/blank.component";
import {SignupComponent}        from "./signup/signup.component";
import {SigninComponent}        from "./signin/signin.component";

const USER_ROUTING: Routes = [
    {   path: 'signup',
        component: SignupComponent,
        outlet: 'popup'
    },
    {   path: 'signin',
        component: SigninComponent,
        outlet: 'popup'
    },
    {   path: '',
        component: BlankComponent,
        outlet: 'popup',
        pathMatch: 'full'
    }
];

export const userRouting = RouterModule.forRoot(USER_ROUTING);