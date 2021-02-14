import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { PetsComponent } from './components/pets/pets.component';
import { VaccineComponent } from './components/vaccine/vaccine.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { NoteComponent } from './components/note/note.component';
import { FooterComponent } from './components/footer/footer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    PetsComponent,
    VaccineComponent,
    PrescriptionComponent,
    NoteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
