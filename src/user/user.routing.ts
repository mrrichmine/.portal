import {Routes, RouterModule}   from "@angular/router";

import {FillerComponent}        from "../filler/filler.component"
import {User__SignupComponent}  from "./__signup/user__signup.component";
import {User__SigninComponent}  from "./__signin/user__signin.component";

const USER_ROUTING: Routes = [
    {   path: 'signup',
        component: User__SignupComponent,
        outlet: 'featuredetails'
    },
    {   path: 'signin',
        component: User__SigninComponent,
        outlet: 'featuredetails'
    },
    {   path: '',
        component: FillerComponent,
        outlet: 'featuredetails',
        pathMatch: 'full'
    }
];

export const userRouting = RouterModule.forRoot(USER_ROUTING);