import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss']
})
export class PaginacaoComponent implements OnInit {
@Output() alterarPaginacao = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  proximo() {
    this.alterarPaginacao.emit('proximo');
  }

  anterior() {
    this.alterarPaginacao.emit('anterior');
  }
}
