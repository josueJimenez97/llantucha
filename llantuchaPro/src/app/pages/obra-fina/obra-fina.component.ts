import { Component, OnInit } from '@angular/core';
import { PhpServiceService } from 'src/app/services/php-service.service';
import { Producto } from 'src/app/clases/producto';
declare var $:any;
@Component({
  selector: 'app-obra-fina',
  templateUrl: './obra-fina.component.html',
  styleUrls: ['./obra-fina.component.css']
})
export class ObraFinaComponent implements OnInit {
  productos: Producto[]=[];
  productosVistos=[];
  productoClick:Producto=new Producto("","","");
  constructor(private subir:PhpServiceService ) { 
    this.cargarDatosPrueba();
  }

  ngOnInit(): void {
    
  }
  
  cargarDatosPrueba(){
    this.productos.push(new Producto("ceramica","obra fina","",3));
    
    this.productos.push(new Producto("tubo 1/4","obra fina","",5));
    this.productos.push(new Producto("yeso","obra fina",""));
    this.productos.push(new Producto("cemento cola","obra fina","",15));
    
    this.productos.push(new Producto("pintura","obra fina","",80));
    
    this.productos.push(new Producto("lava manos","obra fina","",145));
  }
  eventoClick(producto:Producto){
    if(sessionStorage.getItem("productosVistos")!=null){
      console.log(sessionStorage.getItem("productosVistos"));
      this.productosVistos=JSON.parse(sessionStorage.getItem("productosVistos"));
    }else{
      this.productosVistos=[];
      
    }
    console.log("se hizo click en el producto "+producto.getNombre());
    if(!this.existeIdProductoVisto(producto.getCantidad())){
      this.productosVistos.push(producto.getCantidad());
      sessionStorage.setItem("productosVistos",JSON.stringify(this.productosVistos));
    }
    this.productoClick=producto;
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
}
