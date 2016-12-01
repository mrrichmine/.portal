import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BrandComponent} from "./brand/brand.component";
import {MenuComponent} from "./menu/menu.component";

@NgModule({
    declarations: [
        BrandComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class HeaderModule {

}