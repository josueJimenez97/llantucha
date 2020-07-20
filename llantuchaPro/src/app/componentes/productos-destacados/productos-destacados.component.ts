import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { PhpServiceService } from 'src/app/services/php-service.service';
declare var $: any;
@Component({
  selector: 'app-productos-destacados',
  templateUrl: './productos-destacados.component.html',
  styleUrls: ['./productos-destacados.component.css']
})
export class ProductosDestacadosComponent implements OnInit {
  productos:Producto[] =[];
  constructor(private phpService:PhpServiceService) {
    this.cargarProductos();
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
