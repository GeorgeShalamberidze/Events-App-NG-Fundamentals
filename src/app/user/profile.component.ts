import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: pink; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::placeholder { color: #999; }
  `]
})

// This one is Reactive Form a.k.a. Model Driven Form
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup
  firstName!: FormControl
  lastName!: FormControl
  constructor(
    private auth: AuthService, 
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr 
    ) {

  }

  ngOnInit(){
    this.firstName = new FormControl(this.auth.currentUser?.firstName, [Validators.required, Validators.pattern('^[a-zA-Z].*')])
    this.lastName = new FormControl(this.auth.currentUser?.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  } 

  cancel() {
    this.router.navigate(['events'])
  }

  saveProfile(profileValue: any) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(profileValue.firstName, profileValue.lastName)
      this.toastr.success("Profile Saved")
    }
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched 
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.firstName.untouched
  }
}
