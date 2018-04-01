import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpBaseService } from './../../shared/http-base.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class PersonagemService {
  constructor( private http: HttpBaseService) {}

  obterTodosPersonagens(): Observable<any> {
    return this.http.get(`characters?limit=10&orderBy=-modified&apikey=${environment.apiKey}`);
  }

  obterPersonagemPorId(id: number): Observable<any> {
    return this.http.get(`characters/${id}?apikey=${environment.apiKey}`);
  }

  obterPersonagemPorQuadrinho(id: number): Observable<any> {
    return this.http.get(`comics/${id}/characters?orderBy=-modified&apikey=${environment.apiKey}`);
  }
}
