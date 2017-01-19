import {NgModule}               from "@angular/core";
import {CommonModule}           from "@angular/common";
import {RouterModule}           from "@angular/router";

import {UserModule}             from "./users/user.module";

import {FeatureComponent}       from "./feature.component";
import {CropperComponent}       from "./cropper/cropper.component";
import {ImageCropperComponent}  from "ng2-img-cropper";

import {featureRouting}         from "./feature.routing";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        UserModule,
        featureRouting
    ],
    declarations: [
        FeatureComponent,
        CropperComponent,
        ImageCropperComponent
    ],
    exports: [
        FeatureComponent,
        CropperComponent,
        ImageCropperComponent
    ]
})
export class FeatureModule {

}