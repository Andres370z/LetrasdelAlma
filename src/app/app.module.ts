import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeModule } from './home/home.module';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    NgxSpinnerModule,
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
