import { Component, OnInit } from '@angular/core';
import { PhpServiceService } from 'src/app/services/php-service.service';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioIncorrecto=false;
  constructor(private service:PhpServiceService,private router:Router) { }

  ngOnInit(): void {
   
  }

  iniciarSesion(){
    let user=(<HTMLInputElement>document.getElementById("usuario")).value;
    let pass=(<HTMLInputElement>document.getElementById("contrasenia")).value;
    let usuario=new Usuario(user,pass);
    this.verificarUsuarioBD(usuario);
    
  }

  verificarUsuarioBD(usuario){
    this.service.iniciarSesion(usuario).subscribe(
      resp=>{
        console.log(resp)
        if(resp=='correcto'){
          const encodedData = window.btoa(JSON.stringify(usuario)); // encode a string
          localStorage.setItem("user",encodedData);
          this.router.navigate(["/inicio"]);
        }else{
          this.usuarioIncorrecto=true;
        }
      }
    );
  }
}
