import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService, ToastType } from '../../../../services/toast.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    message: ['', Validators.required],
  });

  formFields = [
    {
      label: 'Your name',
      name: 'name',
      type: 'text',
      errorMsg: 'This field is required!',
    },
    {
      label: 'Your e-mail',
      name: 'email',
      type: 'email',
      errorMsg: 'Email is incorrect!',
    },
    {
      label: 'Your message',
      name: 'message',
      type: 'text',
      errorMsg: 'This field is required!',
    },
  ];
  isSubmitted = false;
  constructor(private fb: FormBuilder, private toastService: ToastService) {}

  onSubmit() {
    console.log('submit', this.contactForm.value, this.contactForm.valid);
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      this.toastService.add({
        type: ToastType.success,
        content: 'Your message has been sent',
      });
    } else {
      let message = "Your message can't be sent, because ";
      let invalidFields = [];

      if (this.contactForm.get('name')!.invalid) {
        invalidFields.push('name');
      }

      if (this.contactForm.get('email')!.invalid) {
        invalidFields.push('e-mail');
      }

      if (this.contactForm.get('message')!.invalid) {
        invalidFields.push('message');
      }

      if (invalidFields.length === 1) {
        message += invalidFields[0] + ' is invalid!';
      } else if (invalidFields.length === 2) {
        message += invalidFields.join(' and ') + ' are invalid!';
      } else {
        message +=
          invalidFields.slice(0, -1).join(', ') +
          ' and ' +
          invalidFields.slice(-1) +
          ' are invalid!';
      }
      this.toastService.add({
        type: ToastType.error,
        content: message,
      });
    }
  }

  isFormInvalid(formName: string): boolean {
    const state =
      this.contactForm.get(formName)?.invalid &&
      (this.contactForm.get(formName)?.dirty ||
        this.contactForm.get(formName)?.touched ||
        this.isSubmitted);
    if (typeof state === 'undefined') return true;
    else return state;
  }

  isFormValid(formName: string): boolean {
    const state = this.contactForm.get(formName)?.valid;
    if (typeof state === 'undefined') return true;
    else return state;
  }

  isReady(): boolean {
    return this.contactForm.valid;
  }
  isTouched(): boolean {
    return !this.isReady() && this.contactForm.touched;
  }
}
