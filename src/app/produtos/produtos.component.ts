import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { IProduto } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtoEncontrado: IProduto[]|undefined;              // produtoEncontrado pode ser uma lista de produtos, ou pode ser indefinido
    constructor(private produtoServico:ProdutosService, // injeta o serviço de produto que tem o s metodos do serviço produto, como listar todos, listar por ID
                private route:ActivatedRoute){}         // injeta os serviços de navegação e rotas

    ngOnInit(): void {
        
      const produtos = this.produtoServico.getAll();
       this.route.queryParamMap.subscribe(parametro => {
       const descricao = parametro.get("descricao")?.toLowerCase();
        
        if(descricao){
          this.produtoEncontrado = produtos.filter(produto =>produto.descricao.
          toLowerCase().includes(descricao));
          return;
        }

        
        this.produtoEncontrado=produtos;

       });
       


    }

 }


  // codigo abaixo pega a const produtos e :
      // adiciona dentro dela o chamado de um metodo "getAll()",
      // que retorna todos os produtos armazenados na Iprodutos