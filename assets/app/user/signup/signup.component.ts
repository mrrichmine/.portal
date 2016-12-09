import {Component, OnInit}                  from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {UserService}        from "../user.service";
import {User}               from "../user.model"

@Component({
    selector: 'portal-auth-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;


    constructor(private userService: UserService) {}

    onSubmit() {
        // Собираем уникальный идентификатор для пользователя из его ФИО
        let fullName = this.myForm.value.firstName.concat(' ', this.myForm.value.parentName, ' ', this.myForm.value.lastName);

        const user = new User(
            fullName,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName,
            this.myForm.value.parentName,
            this.myForm.value.birthDate,
            this.myForm.value.personalPhone,
            this.myForm.value.ipPhone
        );
        this.userService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        this.myForm.reset();
    }

    onReset() {
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            fullName:       new FormControl(null, [ ] ),
            password:       new FormControl(null, [ Validators.required, Validators.minLength(6)] ),
            firstName:      new FormControl(null, [ Validators.required, Validators.pattern('^[А-Яа-яЁё]+$') ]),
            lastName:       new FormControl(null, [ Validators.required, Validators.pattern('^[А-Яа-яЁё]+$')] ),
            parentName:     new FormControl(null, [ Validators.required, Validators.pattern('^[А-Яа-яЁё]+$')] ),
            birthDate:      new FormControl(null, [ ] ),
            personalPhone:  new FormControl(null, [ ] ),
            ipPhone:        new FormControl(null, [ ] )
        });
    }
}