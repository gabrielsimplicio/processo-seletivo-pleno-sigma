import { Paginacao } from './paginacao.model';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss']
})
export class PaginacaoComponent {
  @Output() alterarPaginacao = new EventEmitter<string>();
  @Input() paginacao: Paginacao;
  @Input() totalRegistros: number;

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
}
