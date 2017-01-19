import {Routes, RouterModule}   from "@angular/router";

import {BlankComponent}         from "../views/blank/blank.component";
import {UserComponent}          from "./users/user.component";
import {CropperComponent}       from "./cropper/cropper.component";


const FEATURE_ROUTING: Routes = [
    {   path: 'user',
        component: UserComponent,
        outlet: 'featuredetails'
    },
    {   path: 'cropper',
        component: CropperComponent,
        outlet: 'featuredetails'
    },
    {   path: '',
        component: BlankComponent,
        outlet: 'featuredetails',
        pathMatch: 'full'
    }
];

export const featureRouting = RouterModule.forRoot(FEATURE_ROUTING);