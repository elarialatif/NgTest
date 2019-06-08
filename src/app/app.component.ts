import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import {Validators} from '@angular/forms';
// Select
export interface Food {
  value: string;
  display: string;
}
// #Select
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'materialApp';
  //  AutoComplete
    myControl = new FormControl();
    states;
    constructor(){
      this.loadStates();
    }
    //build list of states as map of key-value pairs
    loadStates() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
          Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
          Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
          Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
          North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
          South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
          Wisconsin, Wyoming';
      this.states =  allStates.split(/, +/g).map( function (state) {
          return {
            value: state.toUpperCase(),
            display: state
          };
      });
    }
  // #AutoComplete
  // Check box
    checked = false;
    indeterminate = false;
    labelPosition = 'after';
    disabled = false;
  // #Check box
  // Form
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  // #Form
  // Select
  selectedValue: string; 
   foods: Food[] = [
      {value: 'steak', display: 'Steak'},
      {value: 'pizza', display: 'Pizza'},
      {value: 'tacos', display: 'Tacos'}
   ];
  // #Select
  // Slider
    invert = false;
    thumbLabel = false;
    value = 0;
    vertical = false;
  // #Slider
}