import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { CommonModule } from '@angular/common';
import { LoginServiceService } from '../loginService/login-service.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items = [ { title: 'Romance', description: 'El género literario de romance es un tipo de literatura que se centra en relaciones amorosas como el tema principal. Su objetivo principal es explorar los sentimientos, emociones y desafíos de los personajes en el contexto de una historia de amor.', image: '/Romance.jpg' },
            { title: 'Fantasía', description: 'El género de fantasía es un tipo de literatura que se caracteriza por incluir elementos mágicos, sobrenaturales o irreales, que no pueden explicarse por las leyes naturales. Estas historias suelen desarrollarse en mundos imaginarios o alternativos donde la magia, criaturas míticas y eventos extraordinarios son comunes.', image: '/Fantasia.jpg' },
            { title: 'Thriller', description: 'El thriller es un género literario que se caracteriza por mantener al lector en un estado de suspenso, intriga y emoción constante. Estas historias suelen tener un ritmo rápido, giros inesperados y situaciones llenas de tensión que buscan atrapar la atención del lector desde el principio hasta el final.', image: '/Thriller.jpg' } ];
          
  selectedImage: string | null = null;
  
  openModal(image: string): void { this.selectedImage = image; }
  
  closeModal(): void { this.selectedImage = null; }

  constructor(public loginService: LoginServiceService){}
}
