import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './consultorio-detail.component.html',
  styleUrls: ['./consultorio-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultorioDetailComponent { }
