import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './revaluation-management.component.html',
  styleUrls: ['./revaluation-management.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RevaluationManagementComponent { }
