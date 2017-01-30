import {Routes, RouterModule}   from "@angular/router";

import {BlankComponent}         from "../../views/blank/blank.component";
import {SignupComponent}        from "./signup/signup.component";
import {SigninComponent}        from "./signin/signin.component";

const USER_ROUTING: Routes = [
    {   path: 'signup',
        component: SignupComponent,
        outlet: 'featuredetails'
    },
    {   path: 'signin',
        component: SigninComponent,
        outlet: 'featuredetails'
    },
    {   path: '',
        component: BlankComponent,
        outlet: 'featuredetails',
        pathMatch: 'full'
    }
];

export const userRouting = RouterModule.forRoot(USER_ROUTING);