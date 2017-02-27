import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { ReactiveFormsModule }      from '@angular/forms';

import { BranchesComponent }        from './branches.component';
import { BranchesItemComponent }    from './__item/branches__item.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        BranchesComponent,
        BranchesItemComponent
    ],
    exports: [
        BranchesComponent,
        BranchesItemComponent
    ]
})

export class BranchesModule {

}
