import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-productos-destacados',
  templateUrl: './productos-destacados.component.html',
  styleUrls: ['./productos-destacados.component.css']
})
export class ProductosDestacadosComponent implements OnInit {
  productos:string[] =[];
  constructor() { 
    this.productos.push("ladrillo");
    this.productos.push("cemento");
    this.productos.push("fierro");
    this.productos.push("yeso");
    this.productos.push("madera");
  }

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
  eventoClick(producto:string){
    alert("se hizo click en el producto "+producto);
  }
}
