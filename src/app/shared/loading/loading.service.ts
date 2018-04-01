import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingService {
  private loaderSubject = new Subject<any>();

  loaderState = this.loaderSubject.asObservable();

  constructor() {}

  iniciarLoading() {
    this.loaderSubject.next({ isVisible: true });
  }

  finalizarLoading() {
    this.loaderSubject.next({ isVisible: false });
  }
}
