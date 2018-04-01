import { LoadingService } from './loading/loading.service';
import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';


@Injectable()
export class HttpBaseService {
  constructor(private http: Http, private loadingService: LoadingService) {}

  get(params: string): Observable<any> {
    const url = `${environment.urlApiMarvel}/v1/public/${params}`;
    this.loadingService.iniciarLoading();
    return this.http
      .get(url)
      .map(res => res.json())
      .finally(() => this.loadingService.finalizarLoading());
  }
}
