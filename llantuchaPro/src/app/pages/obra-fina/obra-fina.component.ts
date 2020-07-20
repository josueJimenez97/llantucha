import { Component, OnInit } from '@angular/core';
import { PhpServiceService } from 'src/app/services/php-service.service';
import { Producto } from 'src/app/clases/producto';
@Component({
  selector: 'app-obra-fina',
  templateUrl: './obra-fina.component.html',
  styleUrls: ['./obra-fina.component.css']
})
export class ObraFinaComponent implements OnInit {
  productos: Producto[]=[];
  constructor(private subir:PhpServiceService ) { 
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
  eventoClick(producto:string){
    alert("se hizo click en el producto "+producto);
  }
}
