import { getCriminals } from "./criminals/CriminalProvider.js";
import CriminalListComponent from "./criminals/CriminalListComponent.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import NoteFormComponent from "./notes/NoteForm.js";
import DialogComponent from "./dialog/Dialog.js";
import WitnessListComponent from "./witnesses/WitnessListComponent.js";
import { getWitnesses } from "./witnesses/WitnessProvider.js";
import NotesListComponent from "./notes/NotesList.js";
import { getNotes } from "./notes/NoteDataProvider.js";


//Render Note Form
getNotes().then(
  () => {
    NotesListComponent()
  }
)
NoteFormComponent();

getWitnesses().then(
  () => {
    WitnessListComponent()
  }
);

//Get criminal data, then insert into Criminal List Component
getCriminals().then(
  () => {
  CriminalListComponent()
});

//Get crimes data, then insert into crimes dropdown component
getConvictions().then(
  () => {
  ConvictionSelect();
});

//Render Dialog boxes
DialogComponent()