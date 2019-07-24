import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetNameComponent } from './components/get-name/get-name.component';
import { SetNameComponent } from './components/set-name/set-name.component';

@NgModule({
  declarations: [
    AppComponent,
    GetNameComponent,
    SetNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
