import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { PhpServiceService } from 'src/app/services/php-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-obra-gruesa',
  templateUrl: './obra-gruesa.component.html',
  styleUrls: ['./obra-gruesa.component.css']
})
export class ObraGruesaComponent implements OnInit {
  productos:Producto[] =[];
  constructor(private phpService:PhpServiceService,private router:Router) {
    //this.cargartipo();
    //this.cargarDatosPrueba();
    this.getProductosTipoBD();
  }

  ngOnInit(): void {
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

  

  /*existeIdProductoVisto(idProd:number){
    let res: boolean=false;
    for(let i in this.productosVistos){
      if(this.productosVistos[i]==idProd){
        res=true;
      }
    }
    return res;
  }*/
  esActivo(ruta){
    return ruta==this.router.url;
  }
  getProductosTipoBD(){
    this.phpService.getTipoProductos(1).subscribe(
      resp=>{
        for(let i in resp){
          this.productos.push(new Producto(resp[i].nombre,"",resp[i].imagen,resp[i].idCategoria,resp[i].idProducto));
        }
      }
    );
  }
}
