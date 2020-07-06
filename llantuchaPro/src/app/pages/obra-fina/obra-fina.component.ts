import { Component, OnInit } from '@angular/core';
import { PhpServiceService } from 'src/app/services/php-service.service';
@Component({
  selector: 'app-obra-fina',
  templateUrl: './obra-fina.component.html',
  styleUrls: ['./obra-fina.component.css']
})
export class ObraFinaComponent implements OnInit {
  loader:boolean;
  trueimg:boolean;
  imagen="assets/img/construccion2.jpg";
  imagen2:string;
  constructor(private subir:PhpServiceService ) { }

  ngOnInit(): void {
  }
  
  subiendo(ev){
    this.imagen2="data:image/png;base64,";
    let img:any = ev.target;
    if(img.files.length > 0){
      this.loader = true;
      let form = new FormData();
      form.append('file',img.files[0]);
      this.subir.subirImagen(form).subscribe(
        resp => {
          this.loader = false;
          if(resp.status){
            this.trueimg = true;
            this.imagen2+=resp.msg;
            this.imagen=this.imagen2;
            console.log(resp.msg);
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
}
