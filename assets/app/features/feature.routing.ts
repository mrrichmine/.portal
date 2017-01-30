import {Routes, RouterModule}   from "@angular/router";

import {UserComponent}          from "./users/user.component";
import {SigninComponent}        from "./users/signin/signin.component";
import {SignupComponent}        from "./users/signup/signup.component";
import {CropperComponent}       from "./cropper/cropper.component";


const FEATURE_ROUTING: Routes = [
    {   path: 'user',
        component: UserComponent,
        outlet: 'featuredetails',
    },
    {   path: 'user/signin',
        component: SigninComponent,
        outlet: 'featuredetails'
    },
    {   path: 'user/signup',
        component: SignupComponent,
        outlet: 'featuredetails'
    },
    {   path: 'cropper',
        component: CropperComponent,
        outlet: 'featuredetails'
    },
    {   path: '',
        component: UserComponent,
        outlet: 'featuredetails',
        pathMatch: 'full'
    }
];

export const featureRouting = RouterModule.forRoot(FEATURE_ROUTING);