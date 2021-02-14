import {Routes} from '@angular/router';

import { NoteComponent } from "src/app/components/note/note.component"
import { PetsComponent } from "src/app/components/pets/pets.component"
import { PrescriptionComponent } from "src/app/components/prescription/prescription.component"
import { VaccineComponent } from "src/app/components/vaccine/vaccine.component"

export const routes: Routes = [
  { path: 'pet/my', component: PetsComponent },
  { path: 'pet/rx', component: PrescriptionComponent },
  { path: 'pet/vaccine', component: VaccineComponent },
  { path: 'pet/note', component: NoteComponent },
];