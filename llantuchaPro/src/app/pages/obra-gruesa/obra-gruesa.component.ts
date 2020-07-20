import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { PhpServiceService } from 'src/app/services/php-service.service';
@Component({
  selector: 'app-obra-gruesa',
  templateUrl: './obra-gruesa.component.html',
  styleUrls: ['./obra-gruesa.component.css']
})
export class ObraGruesaComponent implements OnInit {
  tipo= new Producto('','Obra Gruesa','',0);
  productos:Producto[] =[];
  constructor(private phpService:PhpServiceService) {
    //this.cargartipo();
    this.cargarDatosPrueba();
  }

  ngOnInit(): void {
  }

  eventoClick(producto:string){
    alert("se hizo click en el producto "+producto);
  }

  cargartipo(){
    this.phpService.getTipoProductos(2).subscribe(
      resp=>{
        alert(this.productos.length);
        alert(resp);
        this.productos=[];
        for(let i in resp){
          this.productos.push(new Producto(resp[i].nombre,resp[i].categoria,resp[i].imagen,resp[i].cantidad));
        }
      }
    );
  }

  cargarDatosPrueba(){
    this.productos.push(new Producto("cemento","obra fina",""));
    
    this.productos.push(new Producto("ladrillo","obra fina",""));
    this.productos.push(new Producto("arena","obra fina",""));
    this.productos.push(new Producto("fierro","obra fina",""));
    
    this.productos.push(new Producto("piedra","obra fina",""));
    
    this.productos.push(new Producto("cascajo","obra fina",""));
  }
}
