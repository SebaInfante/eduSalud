export interface Medicine {
    medicamentos: Medicamento[];
}

export interface Medicamento {
    id:                           number;
    name:                         string;
    type:                         string;
    description:                  string;
    activeComponents:             string[];
    dosageInstructions:           dosageInstructions[];
    drugInteractions:             drugInteractions[];
    precautions:                  string[];
    storage:                      string;
    indications:                  number[] | any;
    contraindications:            number[] | any;
    secondary_effects:            number[] | any;
}

export interface dosageInstructions {
    id:                 number;
    type:               string;
    dosage:             string;
    frecuency:          string;
    maximumDailyDose?:  string;
}

export interface drugInteractions {
    name:        string;
    description: string;
}
