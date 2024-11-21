import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  top: number = 0;
  left: number = 0;

  moveButton() {
    const container = document.querySelector('.button-container') as HTMLElement;
    const maxHeight = container.clientHeight - 50;
    const maxWidth = container.clientWidth - 100;

    this.top = Math.floor(Math.random() * maxHeight);
    this.left = Math.floor(Math.random() * maxWidth);
  }
}
