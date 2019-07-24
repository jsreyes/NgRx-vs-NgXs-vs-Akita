import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetNameComponent } from './components/set-name/set-name.component';
import { GetNameComponent } from './components/get-name/get-name.component';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SetNameComponent,
    GetNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
