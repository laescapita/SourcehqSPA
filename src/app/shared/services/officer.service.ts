import { 
    EventEmitter,
    Injectable 
} from "@angular/core";
import { Officer } from "../models/officer.model";

// @Injectable({
    
// })

export class OfficerService{
    officerSelected = new EventEmitter<Officer>();

    private officers: Officer[] = [
        {
        firstName: 'Javier',
        lastName: 'Ontiveros',
        position: 'President',
        university: 'University Of Texas at El Paso',
        imagePath: 'https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg'
      },
        {
        firstName: 'Leonel',
        lastName: 'Escapita',
        position: 'President',
        university: 'University Of Texas at El Paso',
        imagePath: 'https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg'
      },
        {
        firstName: 'Robert',
        lastName: 'Contreras',
        position: 'President',
        university: 'University Of Texas at El Paso',
        imagePath: 'https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg'
      },
    ];
    

    getOfficer(){
        return this.officers.slice();
    }

}