import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-libro',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './detalle-libro.component.html',
  styleUrl: './detalle-libro.component.css'
})
export class DetalleLibroComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
