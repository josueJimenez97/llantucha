import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { PhpServiceService } from 'src/app/services/php-service.service';

declare var $: any;
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  productos:Producto[]=[];
  constructor(private phpService:PhpServiceService) {
    //this.cargarProductos();
    this.cargarDatosPrueba();
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();   
    });
  }

  cargarDatosPrueba(){
    this.productos.push(new Producto("ceramica","obra fina","",50));
    
    this.productos.push(new Producto("tubo 1/4","obra fina",""));
    this.productos.push(new Producto("yeso","obra fina",""));
    this.productos.push(new Producto("cemento cola","obra fina",""));
    
    this.productos.push(new Producto("pintura","obra fina","",25));
    
    this.productos.push(new Producto("lava manos","obra fina","",15));
  }
  cargarProductos(){
    this.phpService.getProductos().subscribe(
      resp=>{
        for(let i in resp){
          this.productos.push(new Producto(resp[i].nombre,resp[i].categoria,resp[i].imagen,resp[i].cantidad));
        }
      }
    );
  }
}
