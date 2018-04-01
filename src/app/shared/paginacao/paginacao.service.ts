import { Injectable } from '@angular/core';
import { Paginacao } from './paginacao.model';

@Injectable()
export class PaginacaoService {

  paginacao: Paginacao;

  alterarPaginacao(event) {
    switch (event) {
      case 'proximo':
        this.paginacao.offset += 10;
        break;
      case 'anterior': {
        if (this.paginacao.offset > 10) {
          this.paginacao.offset -= 10;
          break;
        }
      }
    }
  }

}


