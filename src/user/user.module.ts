import {NgModule}               from "@angular/core";
import {CommonModule}           from "@angular/common";
import {ReactiveFormsModule}    from "@angular/forms";

import {UserComponent}          from "./user.component";
import {User__SignupComponent}  from "./__signup/user__signup.component";
import {User__SigninComponent}        from "./__signin/user__signin.component";

import {userRouting}            from "./user.routing";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        userRouting
    ],
    declarations: [
        UserComponent,
        User__SignupComponent,
        User__SigninComponent
    ],
    exports: [
        UserComponent,
        User__SignupComponent,
        User__SigninComponent
    ]

})
export class UserModule {

}