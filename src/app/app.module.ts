import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { StoreModule } from '@ngrx/store';

import { ReactiveFormsModule } from '@angular/forms';
import { validateForm } from './state/reducers/loginform.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({loginform: validateForm}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
