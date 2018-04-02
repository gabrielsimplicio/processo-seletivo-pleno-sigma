import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonagemService } from './../../personagem/shared/personagem.service';
import { QuadrinhoService } from './../../quadrinho/shared/quadrinho.service';

import { Quadrinho } from './../../quadrinho/shared/quadrinho.model';
import { Personagem } from './../../personagem/shared/personagem.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [QuadrinhoService, PersonagemService]
})
export class HomeComponent implements OnInit {
  quadrinhos: Quadrinho[];
  personagens: Personagem[];

  constructor(
    private quadrinhoService: QuadrinhoService,
    private personagemService: PersonagemService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarListaDeTodosQuadrinhos();
    this.carregarListaDePersonagens();
  }

  visualizarPaginaQuadrinhoDetalhes(id: number) {
    this.router.navigate(['quadrinho', id]);
  }

  visualizarPaginaPersonagemDetalhes(id: number) {
    this.router.navigate(['personagem', id]);
  }

  carregarListaDeTodosQuadrinhos() {
    this.quadrinhoService
      .obterOsDozeQuadrinhosMaisRecentes()
      .subscribe(
        response =>
          (this.quadrinhos = this.quadrinhoService.subscribeQuadrinhos(
            response
          )),
        error => console.error(error)
      );
  }

  carregarListaDePersonagens() {
    this.personagemService
      .obterTodosOsDozePersonagensMaisRecente()
      .subscribe(
        response =>
          (this.personagens = this.personagemService.subscribePersonagens(
            response
          )),
        error => console.error(error)
      );
  }
}
