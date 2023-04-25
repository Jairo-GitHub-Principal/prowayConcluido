import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrls: ['./barra-de-pesquisa.component.css']
})
export class BarraDePesquisaComponent implements OnInit{
descricao="";

constructor(private route:Router){}
  ngOnInit(): void {
    
  }
  pesquisar(){
    if(this.descricao){
      this.route.navigate(["produtos"],{queryParams:{descricao: this.descricao}});
      return;
    }
    this.route.navigate(["produtos"]);
  }

}
