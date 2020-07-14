import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
// import {
//    MatAutocompleteModule,
//    MatButtonModule,
//    MatButtonToggleModule,
//    MatCardModule,
//    MatCheckboxModule,
//    MatChipsModule,
//    MatDatepickerModule,
//    MatDialogModule,
//    MatExpansionModule,
//    MatGridListModule,
//    MatInputModule,
//    MatMenuModule,
//    MatNativeDateModule,
//    MatPaginatorModule,
//    MatProgressBarModule,
//    MatProgressSpinnerModule,
//    MatRadioModule,
//    MatRippleModule,
//    MatSelectModule,
//    MatSliderModule,
//    MatSlideToggleModule,
//    MatSnackBarModule,
//    MatSortModule,
//    MatTableModule,
//    MatTabsModule,
//    MatTooltipModule,
//    MatStepperModule,
//  } from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import * as fromHome from './home/index';




@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      ...fromHome.components
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatToolbarModule,
      ReactiveFormsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   // exports: [
   //    MatAutocompleteModule,
   //    MatButtonModule,
   //    MatButtonToggleModule,
   //    MatCardModule,
   //    MatCheckboxModule,
   //    MatChipsModule,
   //    MatStepperModule,
   //    MatDatepickerModule,
   //    MatDialogModule,
   //    MatExpansionModule,
   //    MatGridListModule,
   //    MatIconModule,
   //    MatInputModule,
   //    MatListModule,
   //    MatMenuModule,
   //    MatNativeDateModule,
   //    MatPaginatorModule,
   //    MatProgressBarModule,
   //    MatProgressSpinnerModule,
   //    MatRadioModule,
   //    MatRippleModule,
   //    MatSelectModule,
   //    MatSidenavModule,
   //    MatSliderModule,
   //    MatSlideToggleModule,
   //    MatSnackBarModule,
   //    MatSortModule,
   //    MatTableModule,
   //    MatTabsModule,
   //    MatToolbarModule,
   //    MatTooltipModule,
   // ]
})
export class AppModule { }
