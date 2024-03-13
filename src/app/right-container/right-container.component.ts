import { Component } from '@angular/core';

@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {
  // var to controle tabs
  today:boolean = false;
  week:boolean = true;

  // var to controle metric values
  celcius:boolean = true;
  fahrenheit:boolean = false;

  //function to controle tab values or tabs status
  
  //function for click on tab Today
  onTodayClick(){
    this.today = true;
    this.week = false;
  }
  //function for click on tab Week
  onWeekClick(){
    this.week = true;
    this.today = false;
  }

  //function to controle martic values

  //function for click on tab Celcius
  onCelciusClick(){
    this.celcius = true;
    this.fahrenheit = false;
  }

  //function for click on tab Fahrenheit
  onFahrenheitClick(){
    this.fahrenheit = true;
    this.celcius = false;
  }


}
