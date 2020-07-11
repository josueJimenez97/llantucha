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

  constructor(private service:PhpServiceService,private router:Router) { }

  ngOnInit(): void {
   
  }

  iniciarSesion(){
    let user=(<HTMLInputElement>document.getElementById("usuario")).value;
    let pass=(<HTMLInputElement>document.getElementById("contrasenia")).value;
    alert("verificar si el usuario existe "+user+" "+pass);
    let usuario=new Usuario(user,pass);
    const encodedData = window.btoa(JSON.stringify(usuario)); // encode a string
    localStorage.setItem("user",encodedData);
    console.log(this.router.url);
    //this.router.navigate(["/inicio?refresh=1"]);
    this.router.navigate(["/inicio"]);
  }
}
