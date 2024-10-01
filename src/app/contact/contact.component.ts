import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],  // Include FormsModule here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  ngOnInit() {
    emailjs.init("K15pKytDKAPa9v0Qt"); // Initialize EmailJS with your User ID
  }

  onSubmit() {
    const serviceID = 'service_35ezou8'; // Your EmailJS service ID
    const templateID = 'template_c0zg4kr'; // Your EmailJS template ID

    const templateParams = {
      from_name: this.contactForm.name,
      from_email: this.contactForm.email,
      message: this.contactForm.message,
    };

    emailjs.send(serviceID, templateID, templateParams)
      .then((result: EmailJSResponseStatus) => {
        console.log('SUCCESS!', result.status, result.text);
        alert('Thank you! Your message has been sent.');
        this.resetForm();
      }, (error) => {
        console.error('FAILED...', error);
        alert('Sorry, your message could not be sent. Please try again later.');
      });
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }
}
