import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonagemService } from './../shared/personagem.service';
import { PaginacaoService } from './../../shared/paginacao/paginacao.service';

import { Personagem } from './../shared/personagem.model';
import { Paginacao } from '../../shared/paginacao/paginacao.model';

@Component({
  selector: 'app-personagem-lista',
  templateUrl: './personagem-lista.component.html',
  styleUrls: ['./personagem-lista.component.scss'],
  providers: [PersonagemService, PaginacaoService]
})
export class PersonagemListaComponent implements OnInit {
  personagens: Personagem[];
  textoPesquisa: string;

  constructor(
    private personagemService: PersonagemService,
    private router: Router,
    private paginacaoService: PaginacaoService
  ) {}

  navigate(route: string, id: number) {
    this.router.navigate([route, id]);
  }

  ngOnInit() {
    this.textoPesquisa = '';
    this.paginacaoService.paginacao = new Paginacao(0);
    this.carregarListaDePersonagens();
  }

  alterarPaginacao(event) {
    this.paginacaoService.alterarPaginacao(event);
    this.carregarListaDePersonagens();
  }

  submit(form) {
    this.paginacaoService.paginacao = new Paginacao(0);
    this.carregarListaDePersonagens();
  }


  carregarListaDePersonagens() {
    let acao;
    if (this.textoPesquisa) {
      acao = this.personagemService.obterPersonagensPorNome(
        this.textoPesquisa,
        this.paginacaoService.paginacao
      );
    } else {
      acao = this.personagemService.obterTodosPersonagensPaginado(
        this.paginacaoService.paginacao
      );
    }
    acao.subscribe(
      response => {
        this.paginacaoService.totalRegistros = response.data.total;
        this.personagens = this.personagemService.subscribePersonagens(response);
      },
      error => console.error(error)
    );
  }
}
