import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { PhpServiceService } from 'src/app/services/php-service.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  productos:Producto[]=[];
  constructor(private phpService:PhpServiceService) {
    this.cargarProductos();
  }

  ngOnInit(): void {
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
