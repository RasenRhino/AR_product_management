import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UpdatesectionComponent } from './updatesection/updatesection.component';
import { NewsectionComponent } from './newsection/newsection.component';
import { FormsModule } from '@angular/forms';
import { ArshowComponent } from './arshow/arshow.component';
import { ArcamComponent } from './arcam/arcam.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdatesectionComponent,
    NewsectionComponent,
    ArshowComponent,
    ArcamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
