import {Component} from "@angular/core";
@Component({
    selector: 'app-header',
    template:`
        <div class="row">  
            <div class="col-md-10">            
                <h2><img alt="МФЦ" src="../img/MD_Sign_Smaller.png" />
                Корпоративный портал МФЦ Свердловской Области</h2>
            </div>
            <div class="col-md-2">
                <span class="glyphicon glyphicon-log-in" aria-hidden="true"></span>  Вход на Портал
            </div>
        </div>
    `
})
export class HeaderComponent {}