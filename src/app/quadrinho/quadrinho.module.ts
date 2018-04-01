import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuadrinhoDetalheComponent } from './quadrinho-detalhe/quadrinho-detalhe.component';
import { QuadrinhoListaComponent } from './quadrinho-lista/quadrinho-lista.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FormsModule
  ],
  declarations: [QuadrinhoDetalheComponent, QuadrinhoListaComponent]
})
export class QuadrinhoModule { }
