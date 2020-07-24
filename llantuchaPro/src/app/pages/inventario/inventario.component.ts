import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { PhpServiceService } from 'src/app/services/php-service.service';
import { Item } from 'src/app/clases/item';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

declare var $: any;
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  itemes:Item[]=[];
  productos:Producto[]=[];
  productosDisp:Producto[]=[];
  idCategoria=-1;
  constructor(private phpService:PhpServiceService) {
    //this.cargarProductos();
    //this.cargarDatosPrueba();
    this.getProductosBD();
    /*this.productos.push(new Producto("producto1","obra fina","",2,1))
    this.productos.push(new Producto("producto2","obra fina","",2,2))
    this.productos.push(new Producto("producto3","herramientas","",3,3))*/

  }
  ngOnInit(): void {
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();   
    });
  }

  guardarItem(){
    let idProducto=parseInt((<HTMLInputElement>document.getElementById("producto")).value);
    let fabrica=(<HTMLInputElement>document.getElementById("fabrica")).value;
    let precio=parseInt((<HTMLInputElement>document.getElementById("precio")).value);
    let cantidad=parseInt((<HTMLInputElement>document.getElementById("cantidad")).value);
    console.log("categoria "+this.idCategoria);
    console.log("producto "+idProducto);
    console.log("fabrica "+fabrica);
    console.log("precio"+precio);
    console.log("cantidad "+cantidad);
    let itemPro={
      'idProducto':idProducto,
      'fabrica': fabrica,
      'idCategoria':this.idCategoria,
      'precio':precio,
      'cantidad':cantidad
    }
    this.agregarItemBD(itemPro);
  }

  seleccionoCategoria(){
    this.idCategoria=parseInt((<HTMLInputElement>document.getElementById("categoria")).value);
    console.log("id categoria seleccionada "+this.idCategoria);
    this.productosDisp=[];
    for(let i in this.productos){
      if(this.productos[i].getidCategoria()==this.idCategoria){
        this.productosDisp.push(this.productos[i]);
      }
    }
  }
  getItemesBD(){
    //metodo para obtener los items desde la base de datos
    //guardar en itemes
  }

  getProductosBD(){
    //metodo para obtener los productos desde la base de datos
    //guardar en productos
    this.phpService.getProductosInventario().subscribe(
      resp=>{
        for(let i in resp){
          this.productos.push(new Producto(resp[i].nombre,"","",resp[i].idCategoria,resp[i].idproducto));
        }
        console.log("todos los productos en el inventario");
        console.log(this.productos);
      }
    );
  }

  agregarItemBD(item){
    //para agregar el item a la base de datos
  }
}
