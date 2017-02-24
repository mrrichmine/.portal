import { NgModule }               from "@angular/core";
import { CommonModule }           from "@angular/common";
import { ReactiveFormsModule }    from "@angular/forms";

import { BranchesComponent }      from "./branches.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        BranchesComponent
    ],
    exports: [
        BranchesComponent
    ]
})

export class BranchesModule {

}
