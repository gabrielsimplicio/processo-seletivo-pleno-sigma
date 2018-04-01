import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpBaseService } from './../../shared/http-base.service';
import { environment } from '../../../environments/environment';

import { Paginacao } from './../../shared/paginacao/paginacao.model';

@Injectable()
export class PersonagemService {
  constructor( private http: HttpBaseService) {}

  obterTodosPersonagens(): Observable<any> {
    return this.http.get(`characters?limit=10&orderBy=-modified&apikey=${environment.apiKey}`);
  }

  obterTodosPersonagensPaginado(paginacao): Observable<any> {
    return this.http.get(`characters?orderBy=-modified&limit=${paginacao.limit}&offset=${paginacao.offset}&apikey=${environment.apiKey}`);
  }

  obterPersonagensPorNome(textoPesquisa: string, paginacao: Paginacao): Observable<any> {
    return this.http.get(`characters?orderBy=-modified&&limit=${paginacao.limit}&offset=${paginacao.offset}&apikey=${environment.apiKey}&nameStartsWith=${textoPesquisa}`);
  }

  obterPersonagemPorId(id: number): Observable<any> {
    return this.http.get(`characters/${id}?orderBy=-modified&apikey=${environment.apiKey}`);
  }

  obterPersonagemPorQuadrinho(id: number): Observable<any> {
    return this.http.get(`comics/${id}/characters?orderBy=-modified&apikey=${environment.apiKey}`);
  }

  subscribePersonagens(response) {
    const personagens = [];
    response.data.results.map(item => {
        item.urlImagem = `${item.thumbnail.path}.${item.thumbnail.extension}`;
        personagens.push(item);
    });
    return personagens;
  }
}
