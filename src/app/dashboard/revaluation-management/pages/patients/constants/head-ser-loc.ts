// Interface for Headquarters
export interface Headquarter {
  codeHeadquarter: string;
  nameHeadquarter: string;
}

// Interface for Services
export interface Service {
  codeService: string;
  nameService: string;
}

// Interface for Locations
export interface Location {
  codeLocation: string;
  nameLocation: string;
}

// Example of usage with the provided constants
export const HEADQUARTERS: Headquarter[] = [
  { codeHeadquarter: 'HQ1', nameHeadquarter: 'Hospital Central' },
  { codeHeadquarter: 'HQ2', nameHeadquarter: 'Clínica del Valle' },
  { codeHeadquarter: 'HQ3', nameHeadquarter: 'Centro Médico Norte' },
];

export const SERVICES: Service[] = [
  { codeService: 'SVC1', nameService: 'Urgencias' },
  { codeService: 'SVC2', nameService: 'Consulta Externa' },
  { codeService: 'SVC3', nameService: 'Laboratorio Clínico' },
];

export const LOCATIONS: Location[] = [
  { codeLocation: 'LOC1', nameLocation: 'Pabellón A' },
  { codeLocation: 'LOC2', nameLocation: 'Unidad de Cuidados Intensivos' },
  { codeLocation: 'LOC3', nameLocation: 'Área de Radiología' },
];
  