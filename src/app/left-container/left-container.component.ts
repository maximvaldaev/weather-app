import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-container',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './left-container.component.html',
  styleUrl: './left-container.component.css'
})
export class LeftContainerComponent {
  //var for font awesome icons

  //var for ;eft-nav-bar seach icon
  faMagnifyingGlass:any = faMagnifyingGlass;
  faLocation:any = faLocation;
}
