import { Component, OnInit } from '@angular/core';
import { PhpServiceService } from 'src/app/services/php-service.service';
import { Opcion } from 'src/app/clases/opcion';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opciones:Opcion[]=[];
  constructor(private service: PhpServiceService,private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  verOpciones(){
    let opcion:Opcion;
    this.opciones=[];
    if(localStorage.getItem("user")!=null){
      if(this.opciones.length==0){
        const decodedData = window.atob(localStorage.getItem("user")); // decode the string
        //console.log("imprimiendoo");
        //console.log(localStorage.getItem("user"));
        let obj=JSON.parse(decodedData);
        //console.log(obj.user);
        opcion=new Opcion(obj.user,"",false);
        this.opciones.push(opcion);
        opcion=new Opcion("agregar productos","agregarProductos",true);
        opcion=new Opcion("agregar itemes","agregarItem",true);
        this.opciones.push(opcion);
        opcion=new Opcion("ver inventario","inventario",true);
        this.opciones.push(opcion);
        opcion=new Opcion("cerrar sesion","inicio",true);
        this.opciones.push(opcion);
      }

    }else{
      console.log("no hay user");
      if(this.opciones.length==0){
        opcion=new Opcion("iniciar sesion","login",true);
        this.opciones.push(opcion);
      }
    }
  }
  opcionSelecionado(opcion){
    if(opcion=="cerrar sesion"){
      //console.log("presiono cerrar sesion");
      localStorage.clear();
    }
  }
 
  activo(ruta){
    let rutaAux=this.router.url.substr(0,ruta.length);
    return ruta==rutaAux;
  }
}
