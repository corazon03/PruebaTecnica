import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { register } from 'swiper/element/bundle';
register();
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items = [ { title: 'Card 1', description: 'Descripción de la card 1', image: 'assets/image1.jpg' },
            { title: 'Card 2', description: 'Descripción de la card 2', image: 'assets/image2.jpg' },
            { title: 'Card 3', description: 'Descripción de la card 3', image: 'assets/image3.jpg' } ];
          
  selectedImage: string | null = null;
  
  openModal(image: string): void { this.selectedImage = image; }
  
  closeModal(): void { this.selectedImage = null; }
}
