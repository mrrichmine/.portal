import {Routes, RouterModule} from "@angular/router";

import {UserComponent} from "./user/user.component";
import {MenuComponent} from "./header/menu/menu.component";

const APP_ROUTES: Routes = [
    {   path: '',
        component: MenuComponent,
        pathMatch: 'full'
    },
    {   path: 'user',
        component: UserComponent,
        loadChildren: './user/user.module#UserModule'
    }
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);