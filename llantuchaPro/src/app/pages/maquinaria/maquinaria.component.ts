import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maquinaria',
  templateUrl: './maquinaria.component.html',
  styleUrls: ['./maquinaria.component.css']
})
export class MaquinariaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      console.log("tengo web storage");
     } else {
      // Sorry! No Web Storage support..
      console.log("neeeeel")
     }
  }

}
