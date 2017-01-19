import {Routes, RouterModule} from "@angular/router";

import {ListComponent}    from "./list/list.component";
import {DetailsComponent} from "./details/details.component";
import {PublishComponent} from "./publish/publish.component";

const NEWS_ROUTES: Routes = [
    {   path: 'publish',
        component: PublishComponent,
        outlet: 'newsOutlet'
    },
    {   path: 'details',
        component: DetailsComponent,
        outlet: 'newsOutlet'
    },
    {   path: '',
        component: ListComponent,
        outlet: 'newsOutlet',
        pathMatch: 'full'
    }
];

export const newsRouting = RouterModule.forRoot(NEWS_ROUTES);