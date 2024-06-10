import * as applicationActions from './../../store/application.action';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss'
})
export class ApplicationFormComponent implements OnInit {
  accountSubTypeList: Array<{ value: string, desc: string }> = [{ value: 'IND', desc: 'INDIVIDUAL' }, { value: 'JNT', desc: "JOINT" }];
  productList: Array<{ value: string, desc: string }> = [{ value: 'DEP', desc: "DEPOSIT ACCOUNT" }];
  productTypeList: Array<{ value: string, desc: string }> = [{ value: 'REGSAV', desc: 'ATM SAVINGS ACCOUNT - REGULAR' }, { value: 'PAYSAV', desc: 'ATM SAVINGS ACCOUNT - PAYROLL' }, { value: 'CURR', desc: 'ATM CURRENT ACCOUNT' }, { value: 'PASSAV', desc: 'PASSBOOK SAVINGS ACCOUNT' }, { value: 'TIMDEP', desc: 'TIME DEPOSIT ACCOUNT' }]
  form: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) {

  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      accountType: ['', [Validators.required]],
      product: ['', [Validators.required]],
      productType: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      middleName: ['', []],
      lastName: ['', [Validators.required]],
      mobileNo: ['', [Validators.required, Validators.pattern('^[\\d +]+$')]],
      email: ['', [Validators.required, Validators.pattern('^[^@]+@[^@]+\.[^@]+$')]],
    })
  }

  checkForValidity(formControlName: string) {
    return (this.form.controls[formControlName].dirty || this.form.controls[formControlName].touched) && this.form.controls[formControlName].errors
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(new applicationActions.setApplication(this.form.getRawValue()));
      this.router.navigate(['success']);
    } else {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
    }
  }

  markAllFormControl(){
    
  }

  onClear() {
    this.form.reset({
      accountType: '',
      product: '',
      productType: '',
      firstName: '',
      middleName: '',
      lastName: '',
      mobileNo: '',
      email: '',
    });
  }
}
