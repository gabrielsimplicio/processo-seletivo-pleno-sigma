import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpBaseService } from './../../shared/http-base.service';
import { environment } from '../../../environments/environment';

import { Paginacao } from './../../shared/paginacao/shared/paginacao.model';

@Injectable()
export class QuadrinhoService {
  constructor(private http: HttpBaseService) {}

  obterTodosQuadrinhos(): Observable<any> {
    return this.http.get(
      `comics?hasDigitalIssue=true&apikey=${environment.apiKey}`
    );
  }

  obterOsDozeQuadrinhosMaisRecentes(): Observable<any> {
    return this.http.get(
      `comics?orderBy=-focDate&hasDigitalIssue=true&limit=12&apikey=${
        environment.apiKey
      }`
    );
  }

  obterTodosQuadrinhosPaginado(paginacao): Observable<any> {
    return this.http.get(
      `comics?hasDigitalIssue=true&limit=${paginacao.limit}&offset=${
        paginacao.offset
      }&apikey=${environment.apiKey}`
    );
  }

  obterQuadrinhosPorTitulo(
    textoPesquisa: string,
    paginacao: Paginacao
  ): Observable<any> {
    return this.http.get(
      `comics?hasDigitalIssue=true&limit=${paginacao.limit}&offset=${
        paginacao.offset
      }&apikey=${environment.apiKey}&titleStartsWith=${textoPesquisa}`
    );
  }

  obterQuadrinhoPorId(id: number): Observable<any> {
    return this.http.get(
      `comics/${id}?hasDigitalIssue=true&apikey=${environment.apiKey}`
    );
  }

  obterQuadrinhoPorPersonagem(id: number): Observable<any> {
    return this.http.get(
      `characters/${id}/comics?apikey=${environment.apiKey}`
    );
  }

  subscribeQuadrinhos(response) {
    const quadrinhos = [];
    response.data.results.map(item => {
      if (item.images.length > 0) {
        item.urlImagem = `${item.images[0].path}.${item.images[0].extension}`;
      } else {
        item.urlImagem = `${item.thumbnail.path}.${item.thumbnail.extension}`;
      }
      quadrinhos.push(item);
    });
    return quadrinhos;
  }
}
