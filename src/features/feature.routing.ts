import { Routes, RouterModule }     from "@angular/router";

import { UserComponent }            from "../user/user.component";
import { User__SigninComponent }    from "../user/__signin/user__signin.component";
import { User__SignupComponent }    from "../user/__signup/user__signup.component";
import { CropperComponent }         from "../cropper/cropper.component";
import { DownloadsComponent }       from "../downloads/downloads.component";
import { BranchesComponent }        from "../branches/branches.component";



const FEATURE_ROUTING: Routes = [
    {   path: 'user',
        component: UserComponent,
        outlet: 'featuredetails',
    },
    {   path: 'user/signin',
        component: User__SigninComponent,
        outlet: 'featuredetails'
    },
    {   path: 'user/signup',
        component: User__SignupComponent,
        outlet: 'featuredetails'
    },
    {   path: 'cropper',
        component: CropperComponent,
        outlet: 'featuredetails'
    },
    {   path: 'downloads',
        component: DownloadsComponent,
        outlet: 'featuredetails'
    },
    {   path: 'branches',
        component: BranchesComponent,
        outlet: 'featuredetails',
    },
    {   path: '',
        component: UserComponent,
        outlet: 'featuredetails',
        pathMatch: 'full'
    }
];

export const featureRouting = RouterModule.forRoot(FEATURE_ROUTING);