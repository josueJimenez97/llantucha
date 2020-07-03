import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $(".test").bind({
          copy : function(){
              alert('¡Has copiado!');
          },
          paste : function(){
              alert('¡Has pegado!');
          },
          cut : function(){
              alert('¡Has cortado!');
          }
      });
  });
  }

}
