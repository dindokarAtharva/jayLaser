import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('customersTrack') track!: ElementRef<HTMLDivElement>;
  private scrollInterval: any;
  customers = [
    {
      logo: 'assets/images/logo-lnt.png',
      name: 'L&T'
    },
    {
      logo: 'assets/images/logo-ge.png',
      name: 'GE'
    },
    {
      logo: 'assets/images/logo-ultra.png',
      name: 'Ultra Engineers'
    },
    {
      logo: 'assets/images/logo-sail.png',
      name: 'SAIL'
    },
    {
      logo: 'assets/images/logo-lechler.png',
      name: 'Lechler'
    }
  ];

  features = [
    {
      icon: '⚙️',
      title: '3D CNC Laser Pipe',
      desc: 'Specializing in complex geometries, hole cutting, and notch filtering in tubes and profiles.'
    },
    {
      icon: '🔲',
      title: 'Sheet Cutting Services',
      desc: 'Providing efficient and accurate sheet cutting solutions for your manufacturing requirements.'
    },
    {
      icon: '🛠️',
      title: 'Custom Fabrication Work',
      desc: 'Tailored custom fabrication services to meet your specific design and production needs.'
    }
  ];

  stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
    { value: '220mm', label: 'Max Pipe Diameter' }
  ];
  ngAfterViewInit() {
    this.scrollInterval = setInterval(() => {
      if (this.track && this.track.nativeElement) {
        const el = this.track.nativeElement;
        const scrollAmount = Math.max(el.clientWidth / 4, 150);
        
        // If we reached the end, scroll back to 0
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000);
  }

  ngOnDestroy() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }
}
