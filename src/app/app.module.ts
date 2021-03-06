import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule} from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRippleModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuoteComponent } from './quote/quote.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GlobalVar } from './global-var';

import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';
import { BookInfoComponent } from './book-info/book-info.component';

import { HttpClientModule } from '@angular/common/http';
import { SelectGenreComponent } from './select-genre/select-genre.component';
import { ProfileComponent } from './profile/profile.component';
import { LocationComponent } from './location/location.component';
import { AddBookComponent } from './add-book/add-book.component';
import { YourBooksComponent } from './your-books/your-books.component';
import { SettingsComponent } from './settings/settings.component'
import { AuthGaurdGuard } from './services/auth-gaurd.guard';
import { NicknameComponent } from './nickname/nickname.component';
import { from } from 'rxjs';


firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuoteComponent,
    HomepageComponent,
    SidenavComponent,
    BookInfoComponent,
    SelectGenreComponent,
    ProfileComponent,
    LocationComponent,
    AddBookComponent,
    YourBooksComponent,
    SettingsComponent,
    NicknameComponent
  ],
  imports: [
    FormsModule,
    MatChipsModule,
    MatRippleModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [GlobalVar, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
