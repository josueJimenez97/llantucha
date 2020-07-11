import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'llantuchaPro';

  constructor(private route:Router){

  }
  rutaLogin(){
    let res:boolean=false;
    if(this.route.url=="/login"){
      //console.log("estamos en el login");
      res=true;
    }else{
      //console.log("no estamos en el login");
    }
    return res;
  }
}
