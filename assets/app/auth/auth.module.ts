import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {AuthSignupComponent} from "./auth-signup.component";
import {AuthSigninComponent} from "./auth-signin.component";
import {AuthLogoutComponent} from "./auth-logout.component";

@NgModule({
    declarations: [
        AuthSignupComponent,
        AuthSigninComponent,
        AuthLogoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class AuthModule {

}