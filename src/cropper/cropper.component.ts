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
        if (this.spoiler1){
            this.spoiler1 = false
        } else {
            this.spoiler1 = true
        }
    }

    showSpoiler1(){
        return this.spoiler1 != false;
    }

    switchSpoiler2(){
        if (this.spoiler2){
            this.spoiler2 = false
        } else {
            this.spoiler2 = true
        }
    }

    showSpoiler2(){
        return this.spoiler2 != false;
    }

    switchSpoiler2_1(){
        if (this.spoiler2_1){
            this.spoiler2_1 = false
        } else {
            this.spoiler2_1 = true
        }
    }

    showSpoiler2_1(){
        return this.spoiler2_1 != false;
    }

    switchSpoiler2_2(){
        if (this.spoiler2_2){
            this.spoiler2_2 = false
        } else {
            this.spoiler2_2 = true
        }
    }

    showSpoiler2_2(){
        return this.spoiler2_2 != false;
    }

    switchSpoiler3(){
        if (this.spoiler3){
            this.spoiler3 = false
        } else {
            this.spoiler3 = true
        }
    }

    showSpoiler3(){
        return this.spoiler3 != false;
    }

}