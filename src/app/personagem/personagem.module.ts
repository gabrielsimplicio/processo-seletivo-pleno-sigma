import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { PersonagemListaComponent } from './personagem-lista/personagem-lista.component';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule
  ],
  declarations: [PersonagemListaComponent, PersonagemDetalheComponent]
})
export class PersonagemModule { }
