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
    text: string = "hello world"
    constructor(private authService: AuthService, private router: Router) {
        console.log(this.text.split(' ').map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(' '))
    }

    login (formValue: any) {
        this.authService.loginUser(formValue.userName, formValue.password)
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }
}