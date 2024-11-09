import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent { }
