import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalheDeProdutoComponent } from './detalhe-de-produto/detalhe-de-produto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalheDeProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule

  ]
})
export class ProdutosModule { }
