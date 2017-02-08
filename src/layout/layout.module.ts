import {NgModule}                   from "@angular/core";
import {CommonModule}               from "@angular/common";
import {RouterModule}               from "@angular/router";

import {FeatureModule}              from "../feature/feature.module";

import {FillerComponent}            from "../filler/filler.component";
import {LayoutComponent}            from "./layout.component";
import {Layout__BodyComponent}      from "./__body/layout__body.component";
import {Layout__FooterComponent}    from "./__footer/layout__footer.component";
import {Layout__HeaderComponent}    from "./__header/layout__header.component";

@NgModule({
    imports: [
        CommonModule,
        FeatureModule,
        RouterModule
    ],
    declarations: [
        FillerComponent,
        LayoutComponent,
        Layout__BodyComponent,
        Layout__FooterComponent,
        Layout__HeaderComponent
    ],
    exports: [
        FillerComponent,
        LayoutComponent,
        Layout__BodyComponent,
        Layout__FooterComponent,
        Layout__HeaderComponent
    ]
})
export class LayoutModule {

}