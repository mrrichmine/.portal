import {Component} from "@angular/core/";

@Component({
    selector: 'portal-feature-downloads',
    templateUrl: 'downloads.component.html'
})
export class DownloadsComponent {

    spoiler1 = false;
    spoiler2 = false;
    spoiler2_1 = false;
    spoiler2_2 = false;
    spoiler3 = false;

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