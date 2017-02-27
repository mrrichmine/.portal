import { Component, Input } from '@angular/core/src/metadata/directives';

import { Branch }           from '../branches.model';

@Component({
    selector:    'branches__item',
    templateUrl: 'branches__item.component.html'
})
export class BranchesItemComponent {

    @Input() branch: Branch;

}