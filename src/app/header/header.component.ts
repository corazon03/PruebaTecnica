import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LoginServiceService } from '../loginService/login-service.service';
import { RouterModule } from '@angular/router'
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterModule, MatTooltipModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public loginService: LoginServiceService){}

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(SkillsComponent, {restoreFocus: false});
  }
}
