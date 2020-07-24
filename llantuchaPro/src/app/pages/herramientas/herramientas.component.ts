import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { Router } from '@angular/router';
import { PhpServiceService } from 'src/app/services/php-service.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {
  productos:Producto[]=[];
  productosVistos=[]; 
  constructor(private router: Router,private phpService:PhpServiceService) {
   //this.cargarDatosPrueba(); 
   this.getProductosTipoBD();
  }

  ngOnInit(): void {
  }

  cargarDatosPrueba(){
    this.productos.push(new Producto("martillo","obra fina",""));
    
    this.productos.push(new Producto("alicate","obra fina",""));
    this.productos.push(new Producto("frotacho","obra fina",""));
    this.productos.push(new Producto("clavos 1/2","obra fina",""));
    
    this.productos.push(new Producto("brocha","obra fina",""));
    
    this.productos.push(new Producto("tenasa","obra fina",""));
  }

  eventoClick(producto:Producto){
    /*if(sessionStorage.getItem("productosVistos")!=null){
      console.log(sessionStorage.getItem("productosVistos"));
      this.productosVistos=JSON.parse(sessionStorage.getItem("productosVistos"));
    }else{
      this.productosVistos=[];
      
    }
    console.log("se hizo click en el producto "+producto.getNombre());
    if(!this.existeIdProductoVisto(producto.getCantidad())){
      this.productosVistos.push(producto.getCantidad());
      sessionStorage.setItem("productosVistos",JSON.stringify(this.productosVistos));
    }*/
    sessionStorage.setItem("producto",JSON.stringify(producto));
  }

  existeIdProductoVisto(idProd:number){
    let res: boolean=false;
    for(let i in this.productosVistos){
      if(this.productosVistos[i]==idProd){
        res=true;
      }
    }
    return res;
  }

  esActivo(ruta){
    return ruta==this.router.url;
  }

  getProductosTipoBD(){
    this.phpService.getTipoProductos(4).subscribe(
      resp=>{
        for(let i in resp){
          this.productos.push(new Producto(resp[i].nombre,"",resp[i].imagen,resp[i].idCategoria,resp[i].idProducto));
        }
      }
    );
  }
}
