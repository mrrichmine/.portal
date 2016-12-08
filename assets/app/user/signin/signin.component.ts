import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {User} from "../user.model"
import {UserService} from "../user.service";
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: 'portal-auth-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit{
    myForm: FormGroup;

    constructor(private userService: UserService, private router: Router) {}


    onSubmit() {
        // console.log('onSubmit clicked');
        // Собираем уникальный идентификатор для пользователя из его ФИО
        const fullName = this.myForm.value.firstName.concat(this.myForm.value.parentName, this.myForm.value.lastName);

        const user = new User(
            fullName,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName,
            this.myForm.value.parentName,
            this.myForm.value.birthDate,
        //   this.myForm.value.personalPhone,
        //   this.myForm.value.ipPhone
        );
        this.userService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );
        this.myForm.reset();
    }

    onReset() {
        console.log('onReset clicked');
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            fullName: new FormControl(null, Validators.required),
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            parentName: new FormControl(null, Validators.required),
            birthDate: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }
}