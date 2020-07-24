import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { Item } from 'src/app/clases/item';

@Component({
  selector: 'app-itemes',
  templateUrl: './itemes.component.html',
  styleUrls: ['./itemes.component.css']
})
export class ItemesComponent implements OnInit {
  producto:any="";
  listaItems: Item[]=[];
  itemClick:Item=new Item("",0,0);
  constructor() { 
    this.producto=JSON.parse(sessionStorage.getItem("producto"));
    this.cargarDatos();
  }

  ngOnInit(): void {
  }
  
  cargarDatos(){
    this.listaItems.push(new Item("item 1",52,5.7));
    
    this.listaItems.push(new Item("item 2",100,587));
  }

  eventoClick(item){
    this.itemClick=item;
  }
}
