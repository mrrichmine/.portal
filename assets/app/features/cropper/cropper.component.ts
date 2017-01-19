import {Component} from "@angular/core/";
import {CropperSettings} from 'ng2-img-cropper';

@Component({
    selector: 'portal-feature-cropper',
    templateUrl: 'cropper.component.html'
})
export class CropperComponent {
    data: any;
    cropperSettings: CropperSettings;

    constructor() {

        this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 70;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth = 350;
        this.cropperSettings.croppedHeight = 500;
        this.cropperSettings.canvasWidth = 500;
        this.cropperSettings.canvasHeight = 500;

        this.data = {};

    }
}