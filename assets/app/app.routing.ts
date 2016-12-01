import {Routes, RouterModule} from "@angular/router";

import {AuthComponent} from "./auth/auth.component";
import {MenuComponent} from "./header/menu/menu.component";

const APP_ROUTES: Routes = [
    {   path: '',
        component: MenuComponent,
        pathMatch: 'full'
    },
    {   path: 'auth',
        component: AuthComponent,
        loadChildren: './auth/auth.module#AuthModule'
    }
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);