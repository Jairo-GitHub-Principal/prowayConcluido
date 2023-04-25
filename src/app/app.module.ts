import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSnackBarModule}from "@angular/material/snack-bar";
import { BarraDePesquisaComponent } from './barra-de-pesquisa/barra-de-pesquisa.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginaNaoEncontradaComponent,
    BarraDePesquisaComponent,
   
    
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule
    
    
  ],
  providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
