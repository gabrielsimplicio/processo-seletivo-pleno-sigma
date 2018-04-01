import { Paginacao } from './../../shared/paginacao/paginacao.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpBaseService } from './../../shared/http-base.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class QuadrinhoService {

  constructor(private http: HttpBaseService) { }

  obterTodosQuadrinhosPaginado(paginacao): Observable<any> {
    return this.http.get(`comics?format=comic&limit=${paginacao.limit}&offset=${paginacao.offset}&apikey=${environment.apiKey}`);
  }

  obterTodosQuadrinhos(): Observable<any> {
    return this.http.get(`comics?apikey=${environment.apiKey}`);
  }

  obterQuadrinhos(textoPesquisa: string, paginacao: Paginacao): Observable<any> {
    return this.http.get(`comics?format=comic&limit=${paginacao.limit}&offset=${paginacao.offset}&apikey=${environment.apiKey}&titleStartsWith=${textoPesquisa}`);
  }

  obterQuadrinhoPorId(id: number): Observable<any> {
    return this.http.get(`comics/${id}?format=comic&apikey=${environment.apiKey}`);
  }

  obterQuadrinhoPorPersonagem(id: number): Observable<any> {
    return this.http.get(`character/${id}/comics?format=comic&format=comic&limit=10&orderBy=-focDate&apikey=${environment.apiKey}`);
  }
}
