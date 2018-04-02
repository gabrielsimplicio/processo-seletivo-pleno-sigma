import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { QuadrinhoService } from './../shared/quadrinho.service';
import { PersonagemService } from './../../personagem/shared/personagem.service';

import { Quadrinho } from './../shared/quadrinho.model';
import { Personagem } from './../../personagem/shared/personagem.model';

@Component({
  selector: 'app-quadrinho',
  templateUrl: './quadrinho-detalhe.component.html',
  styleUrls: ['./quadrinho-detalhe.component.scss'],
  providers: [QuadrinhoService, PersonagemService]
})
export class QuadrinhoDetalheComponent implements OnInit {
  id: number;
  imagem: string;
  quadrinho: Quadrinho[];
  personagens: Personagem[];

  constructor(
    private quadrinhoService: QuadrinhoService,
    private personagemService: PersonagemService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.carregarQuadrinhoPorId();
    this.carregarPersonagemPorQuadrinho();
  }

  visualizarPaginaPersonagemDetalhes(id) {
    this.router.navigate(['personagem', id]);
  }

  carregarQuadrinhoPorId() {
    this.quadrinhoService.obterQuadrinhoPorId(this.id).subscribe(
      response => {
        const quadrinho = this.quadrinhoService.subscribeQuadrinhos(response);
        this.quadrinho = quadrinho[0];
      },
      error => console.error(error)
    );
  }

  carregarPersonagemPorQuadrinho() {
    this.personagemService
      .obterPersonagemPorQuadrinho(this.id)
      .subscribe(
        response =>
          (this.personagens = this.personagemService.subscribePersonagens(
            response
          )),
        error => console.error(error)
      );
  }
}
