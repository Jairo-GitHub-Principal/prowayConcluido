import { Injectable } from '@angular/core';
import { IProduto, IProdutoCarrinho, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[]=[]; // adicionamos o interface IProdutoCarrinho, que herda a interface de IProduto

  constructor() { }
  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinhoLocalStorage") || "[]");
    return this.itens;
  }
  

  adicionarAoCarrinho(produto:IProdutoCarrinho){
    
    this.itens.push(produto); //o produto sera enviado por parametro ao clicar no botão addAoCarrinho
                             // e sera adicionado a propriedade itens

     // o codigo abaixo vai add o novo item que foi adicona ao carrinho, a nossa
     // variavel da localStorage, atualizando sempre o seu conteudo                             
    localStorage.setItem("carrinhoLocalStorage",JSON.stringify(this.itens));                         
  }

  removerUmProdutoDoCarrinho(produtoID:number){
    this.itens = this.itens.filter(item=>item.id !== produtoID);
    localStorage.setItem("carrinhoLocalStorage",JSON.stringify(this.itens));   
  }
  limparCarrinho(){
    this.itens=[]; // limpa os itens adicionados no carrinho
    localStorage.clear(); // limpa os dados do localStrorage, apagando nossa variavel'carrinhoLocalStorage'
  }


  
}
