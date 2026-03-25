import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    phone: '',
    service: '3D CNC Laser Pipe Cutting',
    message: '',
    file: null
  };

  nameError = signal(false);
  messageLimitError = signal(false);

  services = [
    'Sheet Cutting Services',
    '3D CNC Laser Pipe Cutting',
    'Custom Fabrication Services',
    'Expert Design Services',
    'Other'
  ];

  submitted = signal(false);
  loading = signal(false);

  contactInfo = [
    {
      icon: '📍',
      title: 'Headquarters & Manufacturing Hub',
      lines: [
        'Sr.No.123, Kate Estate',
        'Pune - Nashik Highway, Infront of Landge Nagar',
        'Sadgurunagar, Bhosari',
        'Pimpri-Chinchwad, Maharashtra 411039'
      ]
    },
    {
      icon: '✉',
      title: 'Email',
      lines: ['info@jaylaserengineers.com', 'ghatolgirish@gmail.com']
    },
    {
      icon: '📞',
      title: 'Phone',
      lines: ['+91 9822280768']
    },
    {
      icon: '⏱',
      title: 'Working Hours',
      lines: ['Monday - Saturday', '9:00 AM - 7:00 PM']
    }
  ];

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      // @ts-ignore
      this.form.file = input.files[0];
    }
  }

  restrictPhoneInput(event: KeyboardEvent) {
    const allowedRegex = /[0-9+\s\-]/;
    // Only block if it's a single character being typed and it doesn't match the regex
    if (event.key.length === 1 && !allowedRegex.test(event.key)) {
      event.preventDefault();
    }
  }

  restrictNameInput(event: KeyboardEvent) {
    const allowedRegex = /[A-Za-z\s'\-]/;
    if (event.key.length === 1 && !allowedRegex.test(event.key)) {
      event.preventDefault();
      this.nameError.set(true);
      setTimeout(() => this.nameError.set(false), 3000);
    }
  }

  get wordCount(): number {
    return this.form.message.trim().split(/\s+/).filter(w => w.length > 0).length;
  }

  restrictMessageInput(event: KeyboardEvent) {
    if (this.wordCount >= 300 && event.key.length === 1 && event.key !== 'Backspace' && event.key !== 'Delete') {
      event.preventDefault();
      this.messageLimitError.set(true);
      setTimeout(() => this.messageLimitError.set(false), 3000);
    }
  }

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.loading.set(true);
    // Simulate a network request
    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set(true);
    }, 1200);
  }

  resetForm() {
    this.form = { name: '', email: '', phone: '', service: '3D CNC Laser Pipe Cutting', message: '', file: null };
    this.submitted.set(false);
  }
}
