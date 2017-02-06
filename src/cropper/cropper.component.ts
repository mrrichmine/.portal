import {Component} from "@angular/core/";
import {CropperSettings} from 'ng2-img-cropper';

@Component({
    selector: 'portal-feature-cropper',
    templateUrl: 'cropper.component.html'
})
export class CropperComponent {
    data;
    cropperSettings: CropperSettings;

    spoiler1 = false;
    spoiler2 = false;
    spoiler2_1 = false;
    spoiler2_2 = false;
    spoiler3 = false;

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

    switchSpoiler1(){
        this.spoiler1 = !this.spoiler1;
    }

    showSpoiler1(){
        return this.spoiler1 != false;
    }

    switchSpoiler2(){
        this.spoiler2 = !this.spoiler2;
    }

    showSpoiler2(){
        return this.spoiler2 != false;
    }

    switchSpoiler2_1(){
        this.spoiler2_1 = !this.spoiler2_1;
    }

    showSpoiler2_1(){
        return this.spoiler2_1 != false;
    }

    switchSpoiler2_2(){
        this.spoiler2_2 = !this.spoiler2_2;
    }

    showSpoiler2_2(){
        return this.spoiler2_2 != false;
    }

    switchSpoiler3(){
        this.spoiler3 = !this.spoiler3;
    }

    showSpoiler3(){
        return this.spoiler3 != false;
    }

}