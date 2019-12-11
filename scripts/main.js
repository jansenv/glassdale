import { getCriminals } from "./criminals/CriminalProvider.js";
import CriminalListComponent from "./criminals/CriminalListComponent.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import NoteFormComponent from "./notes/NoteForm.js";
import SaveNoteComponent from "./notes/NoteList.js";

SaveNoteComponent();

NoteFormComponent();

//Get criminal data, then insert into Criminal List Component
getCriminals().then(() => {
  CriminalListComponent();
});

//Get crimes data, then insert into crimes dropdown component
getConvictions().then(() => {
  ConvictionSelect();
});