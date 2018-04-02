import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { QuadrinhoDetalheComponent } from './quadrinho-detalhe/quadrinho-detalhe.component';
import { QuadrinhoListaComponent } from './quadrinho-lista/quadrinho-lista.component';

@NgModule({
  imports: [SharedModule, FormsModule],
  declarations: [QuadrinhoDetalheComponent, QuadrinhoListaComponent]
})
export class QuadrinhoModule {}
