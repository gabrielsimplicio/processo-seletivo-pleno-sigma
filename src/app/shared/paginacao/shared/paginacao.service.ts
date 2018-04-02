import { Injectable } from '@angular/core';

import { Paginacao } from './paginacao.model';

@Injectable()
export class PaginacaoService {
  paginacao: Paginacao;
  totalRegistros: number;
  totalDePaginas: number;

  alterarPaginacao(event) {
    switch (event) {
      case 'primeira':
        this.paginacao.offset = 0;
        break;
      case 'proximo':
        this.paginacao.offset += 12;
        break;
      case 'anterior': {
        if (this.paginacao.offset >= 12) {
          this.paginacao.offset -= 12;
        }
        break;
      }
      case 'ultima': {
        this.paginacao.offset = this.totalRegistros - this.paginacao.limit;
        break;
      }
    }
  }
}
