import {Routes, RouterModule} from "@angular/router";

import {News__ListComponent}    from "./__list/news__list.component";
import {News__DetailsComponent} from "./__details/news__details.component";
import {News__PublishComponent} from "./__publish/news__publish.component";

const NEWS_ROUTES: Routes = [
    {   path: 'publish',
        component: News__PublishComponent,
        outlet: 'newsOutlet'
    },
    {   path: 'details',
        component: News__DetailsComponent,
        outlet: 'newsOutlet'
    },
    {   path: '',
        component: News__ListComponent,
        outlet: 'newsOutlet',
        pathMatch: 'full'
    }
];

export const newsRouting = RouterModule.forRoot(NEWS_ROUTES);