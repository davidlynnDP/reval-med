import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent { 

  private readonly fb = inject(FormBuilder);
  //! a esta pagina deberia entrar una consulta de todos los tiempos de configuracion para hacer el respectivo enlace y llamar las apis sin problemas

  // Formularios independientes
  public configPatientForm: FormGroup = this.createForm();
  public configMedicamentosForm: FormGroup = this.createForm();
  public configLaboratoriosForm: FormGroup = this.createForm();
  public configImagenesForm: FormGroup = this.createForm();
  public configInterconsultasForm: FormGroup = this.createForm();

  private createForm(): FormGroup {
    return this.fb.group({
      hours: [
        1,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(7),
        ],
      ],
    });
  }

  isInvalidAndTouched(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return !!(control && control.invalid && control.touched);
  }

  onSubmit(form: FormGroup, label: string): void {
    if (form.valid) {
      const hours = form.value.hours;
      const minutes = hours * 60; 
      console.log(`Formulario de ${label} enviado con éxito: ${minutes} minutos`);

      // Lógica para diferenciar peticiones HTTP según el formulario
      switch (label) {
       case 'Pacientes':
        console.log('Pacientes')
         // this.api.submitPatient({ hours, minutes }).subscribe(
         //   (response) => console.log('Paciente enviado:', response),
         //   (error) => console.error('Error enviando paciente:', error)
         // );
         break;

       case 'Medicamentos':
        console.log('Medicamentos')
         // this.api.submitMedicamentos({ hours, minutes }).subscribe(
         //   (response) => console.log('Medicamento enviado:', response),
         //   (error) => console.error('Error enviando medicamento:', error)
         // );
         break;

       case 'Laboratorios':
        console.log('Laboratorios')
         // this.api.submitLaboratorios({ hours, minutes }).subscribe(
         //   (response) => console.log('Laboratorio enviado:', response),
         //   (error) => console.error('Error enviando laboratorio:', error)
         // );
         break;

       case 'Imágenes':
        console.log('Imágenes')
         // this.api.submitImagenes({ hours, minutes }).subscribe(
         //   (response) => console.log('Imagen enviada:', response),
         //   (error) => console.error('Error enviando imagen:', error)
         // );
         break;

       case 'Interconsultas':
        console.log('Interconsultas')
         // this.api.submitInterconsultas({ hours, minutes }).subscribe(
         //   (response) => console.log('Interconsulta enviada:', response),
         //   (error) => console.error('Error enviando interconsulta:', error)
         // );
         break;

       default:
         console.error('Formulario desconocido:', label);
         break;

      }
    } else {
      console.error(`Formulario de ${label} inválido:`, form.errors);
    }
  }

}
