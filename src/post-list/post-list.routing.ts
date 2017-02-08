import {Routes, RouterModule} from "@angular/router";

import {PostList__ListComponent}    from "./__list/post-list__list.component";
import {Post__DetailsComponent} from "../post/__details/post__details.component";
import {Post__PublishComponent} from "./__publish/post-list__publish.component";

const POSTS_ROUTES: Routes = [
    {   path: 'publish',
        component: Post__PublishComponent,
        outlet: 'postlist'
    },
    {   path: 'details',
        component: Post__DetailsComponent,
        outlet: 'postlist'
    },
    {   path: 'list',
        component: PostList__ListComponent,
        outlet: 'postlist',
    },
    {   path: '',
        component: PostList__ListComponent,
        outlet: 'postlist',
        pathMatch: 'full'
    }
];

export const postsRouting = RouterModule.forRoot(POSTS_ROUTES);