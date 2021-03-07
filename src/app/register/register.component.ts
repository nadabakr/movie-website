import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      userName: ['', [Validators.required, Validators.pattern('^[A-Za-z]*$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPass: [
        '',
        [
          Validators.required,
          RxwebValidators.compare({ fieldName: 'password' }),
        ],
      ],
    });
  }
  get regisFormControl() {
    return this.registerForm.controls;
  }
  submitRegisForm() {
    console.log(this.registerForm);
  }
  ngOnInit(): void {}
}
