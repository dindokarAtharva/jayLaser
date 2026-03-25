import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: '3D CNC Laser Pipe Cutting',
      desc: 'Our flagship service. Specialized 6-axis 3D laser processing for round, square, rectangular, and oval pipes with precision beveling, notching, and complex hole cutting.',
      image: 'assets/images/bystronic_machine.png',
      tags: ['Round Tube', 'Square & Rectangular', 'Oval Pipe', 'Complex Profiles']
    },
    {
      title: 'Sheet Cutting Services',
      desc: 'High-speed 2D laser cutting for Mild Steel, Stainless Steel, Aluminum, and Copper with extreme nesting efficiency and precision edge finishing.',
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=553,fit=crop/mnl9yn5qW9tMx4R0/adobestock_722881940_preview-ALpoP24lzxhjM8J7.jpeg',
      tags: ['Mild Steel', 'Stainless Steel', 'Aluminum', 'Copper']
    },
    {
      title: 'Expert Design Services',
      desc: 'We offer custom fabrication services tailored to meet your specific requirements and expectations. Our design team works closely with you to translate your vision into precise technical drawings and cutting paths.',
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=553,fit=crop/mnl9yn5qW9tMx4R0/adobestock_408308006_preview-AE04r7W9GpI2Onv2.jpeg',
      tags: ['CAD Design', 'DXF Files', 'Custom Profiles']
    },
    {
      title: 'Custom Fabrication',
      desc: 'We offer custom Mechanical Design services to meet your specific requirements and expectations. From prototyping to production runs, we handle all volumes with consistent quality and quick turnaround.',
      image: 'https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?ixid=M3wzOTE5Mjl8MHwxfHNlYXNlciUyMGN1dHRpbmd8ZW58MHx8fHwxNzIxMTE1NzQzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=768&h=553',
      tags: ['Prototyping', 'Production Runs', 'Assembly', 'Finishing']
    }
  ];

  process = [
    { step: '01', title: 'Inquiry', desc: 'Share your design files or describe your requirements.' },
    { step: '02', title: 'Quotation', desc: 'We provide a detailed quote with lead time estimate.' },
    { step: '03', title: 'Production', desc: 'Your parts are cut with precision using our CNC lasers.' },
    { step: '04', title: 'Delivery', desc: 'Quality-checked parts delivered to your location.' }
  ];
}
