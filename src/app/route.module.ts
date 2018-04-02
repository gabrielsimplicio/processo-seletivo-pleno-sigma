import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { PersonagemListaComponent } from './personagem/personagem-lista/personagem-lista.component';
import { PersonagemDetalheComponent } from './personagem/personagem-detalhe/personagem-detalhe.component';
import { QuadrinhoListaComponent } from './quadrinho/quadrinho-lista/quadrinho-lista.component';
import { QuadrinhoDetalheComponent } from './quadrinho/quadrinho-detalhe/quadrinho-detalhe.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'personagens', component: PersonagemListaComponent },
  { path: 'personagem', component: PersonagemDetalheComponent },
  { path: 'personagem/:id', component: PersonagemDetalheComponent },
  { path: 'quadrinhos', component: QuadrinhoListaComponent },
  { path: 'quadrinho', component: QuadrinhoDetalheComponent },
  { path: 'quadrinho/:id', component: QuadrinhoDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModule {}
