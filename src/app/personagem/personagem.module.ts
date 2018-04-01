import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemListaComponent } from './personagem-lista/personagem-lista.component';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PersonagemListaComponent, PersonagemDetalheComponent]
})
export class PersonagemModule { }
