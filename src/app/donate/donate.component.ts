import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  standalone: true, // Standalone component setup
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  venmoUsername: string = "@Georges-Chebly"; // Replace with your actual Venmo username
  venmoQRCodePath: string = 'assets/venmo-qr.png'; // Ensure this matches your assets folder
  venmoLogoPath: string = 'assets/venmo_logo.png'; // Ensure this matches your assets folder
}
