import { Injectable } from '@angular/core';
import { IProduto,produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos:IProduto[]=produtos;

  constructor() {}


  getAll(){ // pega todos os produtos
    return this.produtos;
  }
  getOne(produtoId: number){ // pega apenas um produto pelo ID
    return this.produtos.find(produto => produto.id == produtoId);
    
  }

  
}
