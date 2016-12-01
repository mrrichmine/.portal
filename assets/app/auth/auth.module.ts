import {NgModule}               from "@angular/core";
import {CommonModule}           from "@angular/common";
import {ReactiveFormsModule}    from "@angular/forms";

import {SignupComponent}        from "./signup/signup.component";
import {SigninComponent}        from "./signin/signin.component";
import {LogoutComponent}        from "./logout/logout.component";

import {authRouting}            from "./auth.routing";

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ]
})
export class AuthModule {

}