import {NgModule}               from "@angular/core";
import {CommonModule}           from "@angular/common";
import {RouterModule}           from "@angular/router";

import {UserModule}             from "../user/user.module";

import {ImageCropperComponent}  from "ng2-img-cropper";
import {FeatureComponent}       from "./feature.component";
import {CropperComponent}       from "../cropper/cropper.component";
import {DownloadsComponent}     from "../downloads/downloads.component";

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
        ImageCropperComponent,
        DownloadsComponent
    ],
    exports: [
        FeatureComponent,
        CropperComponent,
        ImageCropperComponent,
        DownloadsComponent
    ]
})
export class FeatureModule {

}