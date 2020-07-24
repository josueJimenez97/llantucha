import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
declare var $:any;
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
    $('#divHolaMundo').text('Hola mundo');
    $("#textA").select(function(){		
      let selectedText = document.getSelection();
      $("#resultado").html("Se ha seleccionado el texto " + selectedText);
    });
  }

}
