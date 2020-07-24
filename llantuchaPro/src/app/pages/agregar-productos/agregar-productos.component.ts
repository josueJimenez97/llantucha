import { Component, OnInit } from '@angular/core';
import { PhpServiceService } from 'src/app/services/php-service.service';
import { Producto } from 'src/app/clases/producto';
declare var $: any;
@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})

export class AgregarProductosComponent implements OnInit {
  loader: boolean;
  trueimg: boolean;
  verImagen: boolean = false;
  vistaPrevia = "vista previa";
  //imagen="assets/img/construccion2.jpg";
  imagen: string = "";
  src: string = "";

  constructor(private phpService: PhpServiceService) { }

  ngOnInit(): void {

  }

  subiendo(ev) {
    var laimg = (<HTMLInputElement>document.getElementById("img"));
    console.log(laimg.width);
    console.log(laimg.height);
    //laimg.height = 150;
    //laimg.width = 150;
    let img: any = ev.target;
    if (img.files.length > 0) {
      this.loader = true;
      let form = new FormData();
      console.log(img.files[0]);
      form.append('file', img.files[0]);
      this.phpService.subirImagen(form).subscribe(
        resp => {
          this.loader = false;
          if (resp.status) {
            this.trueimg = true;
            this.imagen = "data:image/png;base64," + resp.msg;
          } else {
            console.log(resp.msg);
          }
        },
        error => {
          this.loader = false;
          alert('Imagen supera el tamaño permitido');

        }
      );
    }
  }
  guardarProducto() {
    console.log("aqui vamo a guardar el producto");
    let nombrePro=(<HTMLInputElement>document.getElementById("producto")).value;
    console.log(nombrePro);
    let idCategoria= (<HTMLInputElement>document.getElementById("categoria")).value;

    let prod: Producto= new Producto(nombrePro,"",this.imagen,parseInt(idCategoria));//siempre enviara a obra gruesa cambiar esto pasar el idcategoria
    this.agregarProductoBD(prod);
  }

  enVistaPrevia(){
    if(this.verImagen){
      this.verImagen=false;
        this.vistaPrevia="vista previa";
    }else{
      if(this.imagen!=""){
        this.verImagen=true;
        this.vistaPrevia="ocultar";
      }
    }
  }

  agregarProductoBD(prod:Producto){
    this.phpService.agregarProducto(prod).subscribe(
      resp=>{
        alert(resp);

      }
    );
  }
}
