import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface PortfolioItem {
  title: string;
  category: string;
  src: string;
  alt: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  activeFilter = signal('Pipe Cutting');

  filters = ['All', 'Sheet Cutting', 'Pipe Cutting', 'Fabrication'];

  allItems: PortfolioItem[] = [
    {
      title: 'Precision Sheet Cut Components',
      category: 'Sheet Cutting',
      src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=499,fit=crop/mnl9yn5qW9tMx4R0/jay_laser-machines-YBg4bbe0P6Sro9kO.png',
      alt: 'Jay Laser Machines'
    },
    {
      title: 'Industrial Laser Cut Parts',
      category: 'Sheet Cutting',
      src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=553,fit=crop/mnl9yn5qW9tMx4R0/adobestock_408308006_preview-AE04r7W9GpI2Onv2.jpeg',
      alt: 'Laser Cutting'
    },
    {
      title: '3D CNC Pipe Cutting',
      category: 'Pipe Cutting',
      src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=553,fit=crop/mnl9yn5qW9tMx4R0/adobestock_722881940_preview-ALpoP24lzxhjM8J7.jpeg',
      alt: 'Pipe Cutting'
    },
    {
      title: 'Custom Laser Patterns',
      category: 'Fabrication',
      src: 'https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?auto=format&fit=crop&w=600&h=450',
      alt: 'Creative laser decor'
    },
    {
      title: 'CNC Tube Fabrication',
      category: 'Pipe Cutting',
      src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=553,fit=crop/mnl9yn5qW9tMx4R0/adobestock_457485785_preview-YKbrl8RnOqcz4pGo.jpeg',
      alt: 'CNC Fabrication'
    },
    {
      title: 'Generated Cut Components',
      category: 'Sheet Cutting',
      src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=553,fit=crop/mnl9yn5qW9tMx4R0/generated/generated-A3QJ77J66zHbjMEE.png',
      alt: 'Generated components'
    },
    {
      title: 'Client Installation - Batch 1',
      category: 'Fabrication',
      src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mnl9yn5qW9tMx4R0/jay_laser-customers-1-YyvDkx9rLzUO08xG.jpg',
      alt: 'Customers 1'
    },
    {
      title: 'Client Installation - Batch 2',
      category: 'Fabrication',
      src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mnl9yn5qW9tMx4R0/jay_laser-customers-2-Yan02x0ze5il0lDp.jpg',
      alt: 'Customers 2'
    },
    {
      title: 'Client Installation - Batch 3',
      category: 'Fabrication',
      src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mnl9yn5qW9tMx4R0/jay_laser-customers-3-dOqZXvaV7ZSnjwDj.jpg',
      alt: 'Customers 3'
    }
  ];

  lightboxOpen = signal(false);
  lightboxItem = signal<PortfolioItem | null>(null);

  get filteredItems(): PortfolioItem[] {
    const f = this.activeFilter();
    return f === 'All' ? this.allItems : this.allItems.filter(i => i.category === f);
  }

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }

  openLightbox(item: PortfolioItem) {
    this.lightboxItem.set(item);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
    this.lightboxItem.set(null);
    document.body.style.overflow = '';
  }
}
