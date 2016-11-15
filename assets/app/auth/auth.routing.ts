import {Routes, RouterModule} from "@angular/router";

import {AuthSignupComponent} from "./auth-signup.component";
import {AuthLogoutComponent} from "./auth-logout.component";
import {AuthSigninComponent} from "./auth-signin.component";

const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signup', component: AuthSignupComponent },
    { path: 'signin', component: AuthSigninComponent },
    { path: 'logout', component: AuthLogoutComponent }
];

export const authRouting = RouterModule.forChild(AUTH_ROUTES);