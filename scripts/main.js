import { getCriminals } from "./criminals/CriminalProvider.js";
import CriminalListComponent from "./criminals/CriminalListComponent.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";

getCriminals().then(
    () => {
        CriminalListComponent();
    }
);

/* Same code as above (no parameters)

getCriminals().then(CriminalList)

*/

getConvictions().then(
    () => {
        ConvictionSelect();
    }
)