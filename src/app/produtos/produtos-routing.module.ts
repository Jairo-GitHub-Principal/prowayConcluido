import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheDeProdutoComponent } from './detalhe-de-produto/detalhe-de-produto.component';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  {path:':id',component: DetalheDeProdutoComponent}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class ProdutosRoutingModule { }
