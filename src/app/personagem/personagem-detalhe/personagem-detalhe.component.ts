import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PersonagemService } from './../shared/personagem.service';
import { QuadrinhoService } from './../../quadrinho/shared/quadrinho.service';

import { Personagem } from './../shared/personagem.model';
import { Quadrinho } from './../../quadrinho/shared/quadrinho.model';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem-detalhe.component.html',
  styleUrls: ['./personagem-detalhe.component.scss'],
  providers: [PersonagemService, QuadrinhoService]
})
export class PersonagemDetalheComponent implements OnInit {
  id: number;
  personagem: Personagem[];
  quadrinhos: Quadrinho[];

  constructor(
    private personagemService: PersonagemService,
    private quadrinhosService: QuadrinhoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.carregarPersonagemPorId();
    this.carregarListaDeQuadrinhosPorPersonagem();
  }

  carregarPersonagemPorId() {
    this.personagemService
    .obterPersonagemPorId(this.id)
    .subscribe(
      response => this.personagem = response.data.results[0],
      error => console.error(error)
    );
  }

  visualizarPaginaDetalhes(id) {
    this.router.navigate(['quadrinho', id]);
  }

  carregarListaDeQuadrinhosPorPersonagem() {
    this.quadrinhosService
    .obterQuadrinhoPorPersonagem(this.id)
    .subscribe(
      response => this.quadrinhos = this.quadrinhosService.subscribeQuadrinhos(response),
      error => console.error(error)
    );
  }
}
