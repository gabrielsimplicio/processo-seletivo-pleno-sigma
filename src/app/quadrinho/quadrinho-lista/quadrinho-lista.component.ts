import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PaginacaoService } from './../../shared/paginacao/shared/paginacao.service';
import { QuadrinhoService } from './../shared/quadrinho.service';

import { Quadrinho } from './../shared/quadrinho.model';
import { Paginacao } from '../../shared/paginacao/shared/paginacao.model';

@Component({
  selector: 'app-lista-quadrinhos',
  templateUrl: './quadrinho-lista.component.html',
  styleUrls: ['./quadrinho-lista.component.scss'],
  providers: [QuadrinhoService, PaginacaoService]
})
export class QuadrinhoListaComponent implements OnInit {
  quadrinhos: Quadrinho[];
  textoPesquisa: string;

  constructor(
    private quadrinhoService: QuadrinhoService,
    private router: Router,
    private paginacaoService: PaginacaoService
  ) {}

  ngOnInit() {
    this.textoPesquisa = '';
    this.paginacaoService.paginacao = new Paginacao(0);
    this.carregarListaDeQuadrinhos();
  }

  visualizarPaginaQuadrinhoDetalhes(id) {
    this.router.navigate(['quadrinho', id]);
  }

  alterarPaginacao(event) {
    this.paginacaoService.alterarPaginacao(event);
    this.carregarListaDeQuadrinhos();
  }

  submit(form) {
    this.paginacaoService.paginacao = new Paginacao(0);
    this.carregarListaDeQuadrinhos();
  }

  private carregarListaDeQuadrinhos() {
    let acao;
    if (this.textoPesquisa) {
      acao = this.quadrinhoService.obterQuadrinhosPorTitulo(
        this.textoPesquisa,
        this.paginacaoService.paginacao
      );
    } else {
      acao = this.quadrinhoService.obterTodosQuadrinhosPaginado(
        this.paginacaoService.paginacao
      );
    }
    acao.subscribe(
      response => {
        this.paginacaoService.totalRegistros = response.data.total;
        this.paginacaoService.totalDePaginas = Math.floor(response.data.total / this.paginacaoService.paginacao.limit);
        this.quadrinhos = this.quadrinhoService.subscribeQuadrinhos(response);
      },
      error => console.error(error)
    );
  }
}
