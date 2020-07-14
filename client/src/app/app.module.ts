import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import * as fromHome from './home/index';
import { appRoutes } from './routes';
import { AuthService } from './_services/auth.service';



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
      RouterModule.forRoot(appRoutes),
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatToolbarModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule
   ],
   providers: [AuthService],
   bootstrap: [
      AppComponent
   ],
   exports: [
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
   ]
})
export class AppModule { }
