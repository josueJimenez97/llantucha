import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  hora:number=0;
  minuto:number=0;
  segundo:number=0;
  tiempo:string=this.hora+":"+this.minuto+":"+this.segundo;
  timeLeft=0;
  constructor() { }

  ngOnInit(): void {
    this.oberserableTimer();
  }

  oberserableTimer() {
    const source = timer(1,1000)
    const abc = source.subscribe(val => {
      //console.log(val, '-');
      this.segundo++;
      if(this.segundo==60){
        this.minuto++;
        this.segundo=0;
        if(this.minuto==60){
          this.hora++;
          this.minuto=0;
          this.segundo=0;
        }
      }
      let segundoS:string=this.segundo+"";
      let minutoS:string=this.minuto+"";
      let horaS:string=this.hora+"";
      if(this.segundo<10){
        segundoS="0"+segundoS;
      }
      if(this.minuto<10){
        minutoS="0"+minutoS;
      }
      if(this.hora<10){
        horaS="0"+horaS;
      }
      this.tiempo=horaS+":"+minutoS+":"+segundoS;
    });
  }
}
