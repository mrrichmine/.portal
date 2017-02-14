import {Routes, RouterModule}    from "@angular/router";

import {Post__DetailsComponent}  from "../post/__details/post__details.component";
import {Posts__ListComponent}    from "./__list/posts__list.component";
import {Posts__PublishComponent} from "./__publish/posts__publish.component";

const POSTS_ROUTES: Routes = [
    {   path: 'publish',
        component: Posts__PublishComponent,
        outlet: 'posts__list'
    },
    {   path: 'details',
        component: Post__DetailsComponent,
        outlet: 'posts__list'
    },
    {   path: '',
        component: Posts__ListComponent,
        outlet: 'posts__list',
        pathMatch: 'full'
    }
];

export const postsRouting = RouterModule.forRoot(POSTS_ROUTES);