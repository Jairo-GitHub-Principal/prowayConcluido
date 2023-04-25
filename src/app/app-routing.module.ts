import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ProdutosRoutingModule } from './produtos/produtos-routing.module';

const routes: Routes = [
  {path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
   {path:"",redirectTo:"produtos",pathMatch:"full"}, // ao carregar o projeto, sera redirecionado para pagina inicial que sera aqui definida 
   
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  {path:"**",component: PaginaNaoEncontradaComponent} // pagina não encontrada, caso a navegação nao encontre a rota requisitada, sera chamado essa rota e abrira a pagina de erro 404 
  
];

@NgModule({
  declarations:[],
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
