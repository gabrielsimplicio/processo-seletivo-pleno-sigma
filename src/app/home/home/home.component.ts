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

  navigate(route: string, id: number) {
    this.router.navigate([route, id]);
  }

  ngOnInit() {
    this.carregarListaDeTodosQuadrinhos();
    this.carregarListaDePersonagens();
  }

  carregarListaDeTodosQuadrinhos() {
    this.quadrinhoService.obterTodosQuadrinhos()
    .subscribe(
      result => {
        this.quadrinhos = result.data.results;
        this.quadrinhos.map(item => {
          item.urlImagem = `${item.thumbnail.path}.${item.thumbnail.extension}`;
        });
      },
      error => console.error(error)
    );
  }

  carregarListaDePersonagens() {
    this.personagemService
      .obterTodosPersonagens()
      .subscribe(
        result => {
          this.personagens = result.data.results;
          this.personagens.map(item => {
            item.urlImagem = `${item.thumbnail.path}.${item.thumbnail.extension}`;
          });
        },
        error => console.error(error)
      );
  }
}
