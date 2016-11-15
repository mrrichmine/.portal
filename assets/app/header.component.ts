import {Component} from "@angular/core";
@Component({
    selector: 'app-header',
    template:`
        <div class="row">  
            <div class="col-md-10">            
                <img alt="МФЦ" src="../img/MD_Sign_Smaller.png" />
                Корпоративный портал МФЦ Свердловской Области
            </div>
            <div class="col-md-2">
                <portal-auth></portal-auth>
            </div>
        </div>
    `
})
export class HeaderComponent {}