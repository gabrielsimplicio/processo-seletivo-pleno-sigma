import { Component, Output, EventEmitter, Input } from '@angular/core';

import { PaginacaoService } from './shared/paginacao.service';

import { Paginacao } from './shared/paginacao.model';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss']
})
export class PaginacaoComponent {
  @Output() alterarPaginacao = new EventEmitter<string>();
  @Input() paginacao: Paginacao;
  @Input() totalRegistros: number;
  @Input() totalDePaginas: number;

  paginaAtual: number;

  constructor(private paginacaoService: PaginacaoService) {}

  primeira() {
    this.alterarPaginacao.emit('primeira');
  }

  proximo() {
    this.alterarPaginacao.emit('proximo');
  }

  anterior() {
    this.alterarPaginacao.emit('anterior');
  }

  ultima() {
    this.alterarPaginacao.emit('ultima');
  }

  mostraPaginaAtual(): number {
    if ( +this.paginacaoService.paginacao.offset === 0) {
      this.paginaAtual = 1;
    } else {
      this.paginaAtual = Math.floor((this.paginacaoService.paginacao.offset / this.paginacaoService.paginacao.limit) + 1);
    }
    return this.paginaAtual;
  }
}
