import {NgModule}           from "@angular/core";
import {CommonModule}       from "@angular/common";
import {RouterModule}       from "@angular/router";

import {FeatureModule}      from "../features/feature.module";

import {ViewComponent}      from "./view.component";
import {BlankComponent}     from "./blank/blank.component";
import {BodyComponent}      from "./body/body.component";
import {FooterComponent}    from "./footer/footer.component";
import {HeaderComponent}    from "./header/header.component";
import {PopupComponent}     from "./popup/popup.component";

@NgModule({
    imports: [
        CommonModule,
        FeatureModule,
        RouterModule
    ],
    declarations: [
        ViewComponent,
        BlankComponent,
        BodyComponent,
        FooterComponent,
        HeaderComponent,
        PopupComponent
    ],
    exports: [
        ViewComponent,
        BlankComponent,
        BodyComponent,
        FooterComponent,
        HeaderComponent,
        PopupComponent
    ]
})
export class ViewModule {

}