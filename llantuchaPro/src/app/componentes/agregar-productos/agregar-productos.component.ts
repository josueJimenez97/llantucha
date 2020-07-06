import { Component, OnInit } from '@angular/core';
import { PhpServiceService } from 'src/app/services/php-service.service';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {
  loader:boolean;
  trueimg:boolean;
  //imagen="assets/img/construccion2.jpg";
  imagen:string="";
  src: string = "";
  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 128,
    resizeMaxWidth: 128
};

  constructor(private phpService:PhpServiceService) { }

  ngOnInit(): void {
  }

  subiendo(ev){
    let img:any = ev.target;
    if(img.files.length > 0){
      this.loader = true;
      let form = new FormData();
      form.append('file',img.files[0]);
      this.phpService.subirImagen(form).subscribe(
        resp => {
          this.loader = false;
          if(resp.status){
            this.trueimg = true;
            this.imagen="data:image/png;base64,"+resp.msg;
            //console.log(resp.msg);
            //this.myimg = environment.ruta+resp.generatedName;
            //this.msn = "Gracias por visitar unprogramador.com"
          }else{
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
  guardarProducto(){
    console.log("aqui vamo a guardar el producto");
  }

selected(imageResult: ImageResult) {
    this.src = imageResult.resized 
      && imageResult.resized.dataURL
      || imageResult.dataURL;
}
}
