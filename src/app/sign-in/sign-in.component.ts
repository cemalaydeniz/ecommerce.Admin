import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  signInForm: FormGroup = null;

  hidePassword: boolean = true;

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get controls() {
    return this.signInForm.controls;
  }

  onPasswordToggle(): void {
    this.hidePassword = !this.hidePassword;
  }

  onSignIn(): void {
    if (!this.signInForm.valid)
      return;

    // WAITING: the sign-in system in the backend should be implemented first
  }
}
