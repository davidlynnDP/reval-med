import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal, effect } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { HEADQUARTERS, LOCATIONS, SERVICES } from './constants';
import type { Headquarter, Location, Service } from './constants';

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
  ],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent {
  private readonly fb = inject(FormBuilder);

  public headquarters = signal<Headquarter[]>(HEADQUARTERS);;

  public headquartersForm = this.fb.group({
    headquarter: ['', Validators.required],
  });

  public servicesForm = this.fb.group({
    service: ['', Validators.required],
  });

  public locationsForm = this.fb.group({
    location: ['', Validators.required],
  });

  public services = signal<Service[]>([]);
  public locations = signal<Location[]>([]);

  public selectedData = signal<{ headquarter: string; service: string; location: string } | null>(null);

  constructor() {
    this.headquartersForm.get('headquarter')?.valueChanges.subscribe((value) => {
      this.services.set(value ? this.fetchServices(value) : []);
      this.servicesForm.reset();
      this.locationsForm.reset();
    });

    this.servicesForm.get('service')?.valueChanges.subscribe((value) => {
      this.locations.set(value ? this.fetchLocations(value) : []);
      this.locationsForm.reset();
    });

    this.locationsForm.valueChanges.subscribe(() => {
      if (this.locationsForm.valid) {
        this.selectedData.set({
          headquarter: this.headquartersForm.value.headquarter ?? '',
          service: this.servicesForm.value.service ?? '',
          location: this.locationsForm.value.location ?? '',
        });
      } else {
        this.selectedData.set(null);
      }
    });

    effect(() => {
      const data = this.selectedData();
      if (data) {
        const { headquarter, service, location } = data;
        console.log('Selected Data:', { headquarter, service, location });
      }
    });
  }

  public fetchServices(headquarter: string): Service[] {
    //! Simular API call con headquarter
    return SERVICES;
  }

  public fetchLocations(service: string): Location[] {
    //! Simular API call con service
    return LOCATIONS;
  }
}
