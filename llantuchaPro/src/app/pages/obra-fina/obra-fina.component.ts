import { Component, OnInit } from '@angular/core';
import { PhpServiceService } from 'src/app/services/php-service.service';
import { Producto } from 'src/app/clases/producto';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-obra-fina',
  templateUrl: './obra-fina.component.html',
  styleUrls: ['./obra-fina.component.css']
})
export class ObraFinaComponent implements OnInit {
  productos: Producto[]=[];
  productosVistos=[];
  constructor(private subir:PhpServiceService,private router:Router) { 
    this.cargarDatosPrueba();
  }

  ngOnInit(): void {
    
  }
  
  cargarDatosPrueba(){
    this.productos.push(new Producto("ceramica","obra fina",""));
    
    this.productos.push(new Producto("tubo 1/4","obra fina",""));
    this.productos.push(new Producto("yeso","obra fina",""));
    this.productos.push(new Producto("cemento cola","obra fina",""));
    
    this.productos.push(new Producto("pintura","obra fina",""));
    
    this.productos.push(new Producto("lava manos","obra fina",""));
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
}
