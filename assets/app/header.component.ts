import {Component} from "@angular/core";
@Component({
    selector: 'app-header',
    template:`
        <header class="row">
            <nav class="navbar navbar-brand">
                <ul class="nav">                  
                    <h2><img alt="МФЦ" src="../img/MD_Sign_Smaller.png" />
                    Корпоративный портал МФЦ Свердловской Области</h2>
                </ul>
            </nav>            
        </header>
    `
})
export class HeaderComponent {}