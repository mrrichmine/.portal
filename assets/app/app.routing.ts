import {Routes, RouterModule} from "@angular/router";

import {AuthComponent} from "./auth/auth.component";

const APP_ROUTES: Routes = [
    { path: 'auth', component: AuthComponent, loadChildren: 'auth/auth.module#AuthModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);