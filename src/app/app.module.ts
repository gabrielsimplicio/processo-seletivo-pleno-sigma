import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { HttpBaseService } from './shared/http-base.service';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { PersonagemModule } from './personagem/personagem.module';
import { QuadrinhoModule } from './quadrinho/quadrinho.module';
import { RouteModule } from './route.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    LayoutModule,
    HomeModule,
    PersonagemModule,
    QuadrinhoModule,
    RouteModule
  ],
  providers: [HttpBaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
