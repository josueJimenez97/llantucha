import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maquinaria',
  templateUrl: './maquinaria.component.html',
  styleUrls: ['./maquinaria.component.css']
})
export class MaquinariaComponent implements OnInit {
  productos: Producto[]=[];
  productosVistos=[];
  constructor(private router:Router) { 
    this.cargarDatosPrueba();
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("produtosVistos")!=null){
      console.log(sessionStorage.getItem("produtosVistos"));
    }else{
      console.log("no hay sesion storage");
    }
  }
  cargarDatosPrueba(){
    this.productos.push(new Producto("mezcladora","obra fina",""));
    
    this.productos.push(new Producto("vibradora","obra fina",""));
    this.productos.push(new Producto("ginche","obra fina",""));
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
