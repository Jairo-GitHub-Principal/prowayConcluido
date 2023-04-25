import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit{
  
  constructor(private fb:FormBuilder){} // injemos o o serviço formBuilder,class de formControl
                                        // que possibilita a validadção dos formularioa
  
  formContato = this.fb.group({ // cria um grupo, chaves especificas  para validar o formulario
    nome:["",[Validators.minLength(4), Validators.required]],
    assunto:["",[Validators.minLength(10), Validators.required]],
    telefone:["",[Validators.minLength(11), Validators.required]],
    email:["",[Validators.email, Validators.required]],
    mensagem:["",[Validators.minLength(20), Validators.required]]
  });  
    
  ngOnInit(): void {
   }

   enviarFormulario(){
    alert("os dados foram enviados"); // msg de dados enviados
    this.formContato.reset(); // limpar o formulario

   }

}
