import { afterNextRender, Component } from '@angular/core';
import { ListadoService } from '../listadoService/listado.service';
import { NgFor, NgIf } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgIf, NgFor, MatCard, MatCardContent,MatCardHeader,MatCardContent, MatCardTitle, MatCardSubtitle, MatGridListModule, MatButton],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

 constructor(public listadoService: ListadoService) {
  afterNextRender(() => {
    this.listadoService.getBooks();
  })
 }

  onNextPage() {
    this.listadoService.nextPage();
  }

  onPrevPage() {
    this.listadoService.prevPage();
  } 
}
