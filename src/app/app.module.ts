import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1Ijoia2VzYXYtc3BhcmtvdXQiLCJhIjoiY2xxYnhrbmVsMDVkODJrbzcyYmk1b2ZrOSJ9.eqRN_iBeEDzyWtx3r79bwQ', // Optional, can also be set per map (accessToken input of mgl-map)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
