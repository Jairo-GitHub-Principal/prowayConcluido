import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensDoCarrinho:IProdutoCarrinho[]=[];
  total = 0;
  
  constructor(
                  public carrinhoServico:CarrinhoService,
                  private router:Router
              ){}
  
  ngOnInit(): void {
    this.itensDoCarrinho=this.carrinhoServico.obtemCarrinho();
    this.caucularTotal();
  }

  caucularTotal(){
    this.total=this.itensDoCarrinho.reduce((prev,curr)=>prev + (curr.preco * curr.quantidade),0);
    return this.total;
  }

  removerDoCarrinho(produtoID:number){
    this.itensDoCarrinho = this.itensDoCarrinho.filter(item=>item.id !== produtoID);
    this.carrinhoServico.removerUmProdutoDoCarrinho(produtoID);
    this.caucularTotal();
    
  }

  comprar(){
    alert("Compra realizada com sucesso");
    this.carrinhoServico.limparCarrinho();
    this.router.navigate(["produtos"]);

  }

}
