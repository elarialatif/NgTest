import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Slider
import {MatSliderModule} from '@angular/material';
// Slide Toggle
import {MatSlideToggleModule} from '@angular/material';
// Menu
import {MatMenuModule, MatButtonModule} from '@angular/material';
// SideNav
import {MatSidenavModule} from '@angular/material';
// Auto complete
import {MatAutocompleteModule,MatInputModule} from '@angular/material';
// Check box
import {MatCheckboxModule} from '@angular/material';
//  Datepicker
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';
//  Form Field 
import {MatOptionModule, MatSelectModule, MatIconModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatAutocompleteModule,
      MatInputModule,
      FormsModule,
      MatCheckboxModule,
      MatSlideToggleModule,
      MatMenuModule, 
      MatButtonModule,
      MatSidenavModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatOptionModule, 
      MatSelectModule, 
      MatIconModule,
      MatSliderModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }