import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})

export class BasicosComponent implements OnInit {

  @ViewChild( 'miFormulario' ) miFormulario!: NgForm; // Recibe el elemento con referencia miFormulario y lo nombre mi Formulario
  
  initForm = {
    producto: '',
    precio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  // Validaciones de formulario
  nombreValido(): Boolean {
    return this.miFormulario?.controls.producto?.invalid && 
              this.miFormulario.controls.producto?.touched
  }
  precioValido(): Boolean {

    return this.miFormulario?.controls.precio?.value < 0 && 
              this.miFormulario.controls.precio?.touched
  }

  guardar( ){
    /* console.log( this.miFormulario );
    // validacion de precioas mayor a cero
    if( this.miFormulario.controls.precio.value < 0) {
      console.log( 'No posteado' );
      return; }*/

      console.log('Posteo correcto');
      this.miFormulario.resetForm({
        producto: '',
        precio: 0,
        existencias: 0
      });
    
  }

}
