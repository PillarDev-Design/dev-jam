import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
  FormBuilder,
  FormGroup
} from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {
  /* Variable Declaration */
  animalForm: FormGroup;

  /* FormControl Declarations */
  recordInformationDateInControl = new FormControl( "" );
  recordInformationShelterNumberControl = new FormControl( "" );
  recordInformationIntakeTypeOSControl = new FormControl( false );
  recordInformationIntakeTypeTControl = new FormControl( false );
  recordInformationIntakeTypeSControl = new FormControl( false );
  recordInformationHealthCertDateControl = new FormControl( "" );

  petInformationNameControl = new FormControl( "" );
  petInformationDOBControl = new FormControl( "" );
  petInformationAgeOnTransportControl = new FormControl( "" );
  petInformationGenderControl = new FormControl( );

  petInformationBreedControl = new FormControl( "" );
  petInformationRabiesTagControl = new FormControl( "" );
  petInformationDateControl = new FormControl( "" );
  petInformationWeightControl = new FormControl( "" )
  petInformationDate2Control = new FormControl( "" );
  petInformationWeight2Control = new FormControl( "" );
  petInformationColorControl = new FormControl( "" );
  petInformationAssessmentDateControl = new FormControl( "" );

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.animalForm = this.fb.group( {
      recordInformationDateIn: this.recordInformationDateInControl,
      recordInformationShelterNumber: this.recordInformationShelterNumberControl,
      recordInformationIntakeTypeOS: this.recordInformationIntakeTypeOSControl,
      recordInformationIntakeTypeT: this.recordInformationIntakeTypeTControl,
      recordInformationIntakeTypeS: this.recordInformationIntakeTypeSControl,
      recordInformationHealthCertDate: this.recordInformationHealthCertDateControl,

      petInformationName: this.petInformationNameControl,
      petInformationDOB: this.petInformationDOBControl,
      petInformationAgeOnTransport: this.petInformationAgeOnTransportControl,
      petInformationGender: this.petInformationGenderControl,

      petInformationBreed: this.petInformationBreedControl,
      petInformationRabiesTag: this.petInformationRabiesTagControl,
      petInformationDate: this.petInformationDateControl,
      petInformationWeight: this.petInformationWeightControl,
      petInformationDate2: this.petInformationDate2Control,
      petInformationWeight2: this.petInformationWeight2Control,
      petInformationColor: this.petInformationColorControl,
      petInformationAssessmentDate: this.petInformationAssessmentDateControl
    });
  }

}
