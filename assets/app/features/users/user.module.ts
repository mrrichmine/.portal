import {NgModule}               from "@angular/core";
import {CommonModule}           from "@angular/common";
import {ReactiveFormsModule}    from "@angular/forms";

import {UserComponent}          from "./user.component";
import {SignupComponent}        from "./signup/signup.component";
import {SigninComponent}        from "./signin/signin.component";

import {userRouting}            from "./user.routing";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        userRouting
    ],
    declarations: [
        UserComponent,
        SignupComponent,
        SigninComponent
    ],
    exports: [
        UserComponent,
        SignupComponent,
        SigninComponent
    ]

})
export class UserModule {

}