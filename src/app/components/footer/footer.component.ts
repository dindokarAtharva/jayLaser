import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  email = '';
  subscribed = false;

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' }
  ];

  onSubscribe() {
    if (this.email && this.email.includes('@')) {
      this.subscribed = true;
      this.email = '';
    }
  }

  currentYear = new Date().getFullYear();
}
