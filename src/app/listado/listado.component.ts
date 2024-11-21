import { afterNextRender, Component } from '@angular/core';
import { ListadoService } from '../listadoService/listado.service';
import { NgFor, NgIf } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButton } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DetalleLibroComponent } from '../detalle-libro/detalle-libro.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

export interface DetailsResponse {
  status: string
  id: string
  title: string
  subtitle: string
  description: string
  authors: string
  publisher: string
  pages: string
  year: string
  image: string
  url: string
  download: string
}


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgIf, NgFor, MatCard, MatCardContent,MatCardHeader,MatCardContent, MatCardTitle, MatCardSubtitle, MatGridListModule, MatButton, FooterComponent, HeaderComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

 constructor(public listadoService: ListadoService, private http: HttpClient, private dialog: MatDialog) {
  afterNextRender(() => {
    this.listadoService.getBooks();
  })
 }

  getDetails(id: string){
    this.http.get<DetailsResponse>(`https://www.dbooks.org/api/book/${id}`).subscribe(det => {
       this.dialog.open(DetalleLibroComponent, { data: det})
    })
  }

  onNextPage() {
    this.listadoService.nextPage();
  }

  onPrevPage() {
    this.listadoService.prevPage();
  } 
}
