import { Component, OnInit } from '@angular/core';

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
  }

  ngOnInit(): void {
  }

}
