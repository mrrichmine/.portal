import {Component, OnInit}                  from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {AuthService}        from "../auth.service";
import {User}               from "../auth.model"

@Component({
    selector: 'portal-auth-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor(private authService: AuthService) {}

    onSubmit() {
        console.log('onSubmit clicked');
        const user = new User(
            this.myForm.value.firstName,
            this.myForm.value.lastName,
            this.myForm.value.parentName,
            this.myForm.value.password,
            this.myForm.value.personalPhone,
            this.myForm.value.ipPhone
        );
        this.authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName:      new FormControl(null, [ Validators.required, Validators.pattern('^[А-Яа-яЁё]+$') ]),
            lastName:       new FormControl(null, [ Validators.required, Validators.pattern('^[А-Яа-яЁё]+$')] ),
            parentName:     new FormControl(null, [ Validators.required, Validators.pattern('^[А-Яа-яЁё]+$')] ),
            password:       new FormControl(null, [ Validators.required, Validators.minLength(6)] ),
            personalPhone:  new FormControl(null, [ ] ),
            ipPhone:        new FormControl(null, [ ] )
        });
    }
}