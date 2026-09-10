
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name = '';
  email = '';
  subject = '';
  message = '';

  isSending = false;

  constructor(private toastr: ToastrService) {}

  sendMessage() {

    if (!this.name.trim()) {
      this.toastr.warning(
        'Please tell me your name so I know who I’m connecting with.',
        'Almost There'
      );
      return;
    }

    if (!this.email.trim()) {
      this.toastr.warning(
        'Please provide your email so I can get back to you.',
        'Email Needed'
      );
      return;
    }

    if (!this.subject.trim()) {
      this.toastr.warning(
        'A subject helps me understand what you would like to discuss.',
        'Subject Needed'
      );
      return;
    }

    if (!this.message.trim()) {
      this.toastr.warning(
        'Tell me a little about your project or idea.',
        'Message Needed'
      );
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(this.email)) {
      this.toastr.error(
        'Please check your email address and try again.',
        'Invalid Email'
      );
      return;
    }

    if (this.isSending) {
      return;
    }

    this.isSending = true;

    const templateParams = {
      name: this.name.trim(),
      email: this.email.trim(),
      subject: this.subject.trim(),
      message: this.message.trim()
    };

    emailjs.send(
      'service_0s9ofke',
      'template_koyqe6a',
      templateParams,
      {
        publicKey: 'y_ITzd69u7queyfFk'
      }
    )
    .then(() => {

    
   this.toastr.success(
  'Your message has been sent successfully.',
  'Message Sent'
   );


      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';

    })
    .catch((error) => {

      console.error('EmailJS Error:', error);

      this.toastr.error(
        'I couldn’t send your message right now. Please try again in a moment.',
        'Something Went Wrong'
      );

    })
    .finally(() => {

      this.isSending = false;

    });
  }
}

