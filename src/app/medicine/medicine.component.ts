import { Component, OnInit } from '@angular/core';
import medicines from '../../assets/jsons/medicine.json'
import indications from '../../assets/jsons/indications.json'
import contraindications from '../../assets/jsons/contraindications.json'
import secondaryEffect from '../../assets/jsons/secondary_effect.json'
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { Medicamento } from '../models/medicine';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [CommonModule, ButtonModule, ListboxModule, FormsModule],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.scss'
})
export class MedicineComponent implements OnInit {
    constructor(){}

    medicineList: Medicamento[] = medicines.medicamentos;
    medicineSelected = null;
    showAllMedicine = false;
    ngOnInit(): void {
        // debugger
        console.log(medicines.medicamentos)
        // console.log(this.medicineList);
        
        this.medicineList = this.medicineList.map(medicine => {
            medicine.indications = loadIndications(medicine);
            medicine.contraindications = loadContraindications(medicine);
            medicine.secondary_effects = loadSecondaryEffect(medicine);
            return {
                ...medicine,
            }
        })
    }

}

function loadSecondaryEffect(medicine:Medicamento){
    let secondaryEffectList = medicine.secondary_effects; //[1,2]
    return secondaryEffectList.map((indication:number) => secondaryEffect.secondary_effect.find(item => item.id === indication))
}

function loadIndications(medicine:Medicamento){
    let indicationsList = medicine.indications; //[1,2]
    return indicationsList.map((indication:number) => indications.indications.find(item => item.id === indication))
}

function loadContraindications(medicine:Medicamento){
    let contraindicationsList = medicine.contraindications; //[1,2]
    return contraindicationsList.map((indication:number) => contraindications.contraindications.find(item => item.id === indication))
}