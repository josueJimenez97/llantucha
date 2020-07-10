import { Component, OnInit } from '@angular/core';
import { PhpServiceService } from 'src/app/services/php-service.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private service: PhpServiceService) { 
    if(localStorage.getItem("user")!=null){
      const decodedData = window.atob(localStorage.getItem("user")); // decode the string
      console.log("imprimiendoo");
      console.log(localStorage.getItem("user"));
      console.log(decodedData);
    }else{
      console.log("no hay user");
    }
  }

  ngOnInit(): void {
    $(document).ready(() => {
      console.log("xdxdxd");
    });
    
  }

  
}
