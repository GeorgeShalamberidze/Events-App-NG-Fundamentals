import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
    `]
})

// Template Driven Form + HTML
export class LoginComponent {
    password!: any
    userName!: any
    mouseoverLogin!: boolean
    loginFailed: boolean = false

    constructor(private authService: AuthService, private router: Router) {
    }

    login (formValue: any) {
        this.authService.loginUser(formValue.userName, formValue.password)
            .subscribe((resp) => {
                if (!resp) {
                    this.loginFailed = true              
                }
                else {
                    this.router.navigate(['events'])
                }
            })
    }

    cancel() {
        this.router.navigate(['events'])
    }
}