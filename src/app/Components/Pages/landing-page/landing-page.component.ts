import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/Service/Network/http.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @Input() isVisible = false;

  signupForm: FormGroup;
  message: String | null = null;
  error: String | null = null;

  constructor(private fb: FormBuilder,private http:HttpService,) {
    this.signupForm = this.fb.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  ngOnInit(): void {
  }

  showSignupPopup() {
    this.isVisible = true;
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    this.message = null;
    this.error = null;
    if (this.signupForm.valid) {
      const userDetails = this.signupForm.value;
      console.log('Submitting data:', userDetails);
      this.http.regsiter(userDetails).subscribe((data)=>{
        if(data.Status == 200){
          this.message = 'We got you! Hold Tight while we process your account and will send you an email confirming your access.';
          this.signupForm.reset();
        }
        else if(data.Status == 301){
          this.error = data.Error || "";
        }
        else{
          this.error = 'Something Went Wrong! Try again later!';
        }
      })
      // Call your API here (use HttpClient)
      // Example:
      // this.http.post('your-api-endpoint', userDetails).subscribe(...);

      
    }
  }

  closePopup() {
    this.isVisible = false;
    this.message = null;
    this.error = null;
  }

}
