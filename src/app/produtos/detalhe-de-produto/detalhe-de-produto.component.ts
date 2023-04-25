import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, IProdutoCarrinho } from '../../produtos';
@Component({
  selector: 'app-detalhe-de-produto',
  templateUrl: './detalhe-de-produto.component.html',
  styleUrls: ['./detalhe-de-produto.component.css']
})
export class DetalheDeProdutoComponent implements OnInit {
  


  produtoEncontradoID:IProduto |undefined;
  quantidade=1; 
  constructor(private detalheProdService:ProdutosService, // injetamos o serviço ProdutosService
              private route: ActivatedRoute,  /* injetamos aqui o activatedRoute para 
    que possamos trabalhar com rotas, para podermos manipular os dados enviando e recebemdo 
    atravez de uma rota especifica*/    
      private notificacaoService: NotificacaoService,
      private carrinhoService: CarrinhoService

    ){  }
  ngOnInit(): void {  
  const routeParams = this.route.snapshot.paramMap;//possibilita pegar os parametros de uma  rota
                    // convertemos p number a string recuperada pelo get("id")
  const produtoId = Number(routeParams.get("id")); // pegar o "id" do produto por parametro de rota, obs que o id passa por parametro nessa linha de codigo, é o mesmo nome passado para o {path:':id',component: DetalheDeProdutoComponent} em produtos-routing-module.ts
  /** na linha abaixo chamamos a propriedade produtos que derinimos la emcima
   * e lhe atribuimos o retorno do metodo getOne()  o retorno do metodo getOne, vai ser ralacionado com o
   *  id "produtoId"  que lhe foi passado por parametro   */
  
  alert(produtoId)
  this.produtoEncontradoID = this.detalheProdService.getOne(produtoId);
  }
  msg = "produto adicionado ao carrinho";
  
adicionarAoCarrinho(){
   this.notificacaoService.notificar(this.msg,"Ok")
   const produtoCarrinho: IProdutoCarrinho = {
        ...this.produtoEncontradoID!,
        quantidade:this.quantidade
   }
    this.carrinhoService.adicionarAoCarrinho(produtoCarrinho);
}

  
  

}
