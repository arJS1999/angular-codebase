import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class SharedComponent {

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  userProfileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    image: new FormControl('', [Validators.required]),
  });


  UserImageError(): any {
    if (this.userProfileForm.get('image')?.hasError('required')) {
      return 'You must select a image';
    }
  }

  
  UserNameError(): any {
    if (this.userProfileForm.get('name')?.hasError('required')) {
      return 'You must enter a name';
    }
    if (this.userProfileForm.get('name')?.hasError('pattern')) {
      return 'Alphabet only allowed';
    }
  }

  UserEmailError(): any {
    if (this.userProfileForm.get('email')?.hasError('required')) {
      return 'You must enter a email';
    }
    if (this.userProfileForm.get('email')?.hasError('email')) {
      return 'Not a valid email';
    }
  }

  UserPasswordError(): any {
    if (this.userProfileForm.get('password')?.hasError('required')) {
      return 'You must enter a password';
    }
    if (this.userProfileForm.get('password')?.hasError('minlength')) {
      return 'Password minimum 4 characters';
    }
  }
}
