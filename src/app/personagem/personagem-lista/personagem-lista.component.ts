import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonagemService } from './../shared/personagem.service';
import { Personagem } from './../shared/personagem.model';

@Component({
  selector: 'app-personagem-lista',
  templateUrl: './personagem-lista.component.html',
  styleUrls: ['./personagem-lista.component.scss'],
  providers: [PersonagemService]
})
export class PersonagemListaComponent implements OnInit {
  personagens: Personagem[];

  constructor(
    private personagemService: PersonagemService,
    private router: Router
  ) {}

  navigate(route: string, id: number) {
    this.router.navigate([route, id]);
  }

  ngOnInit() {
    this.carregarListaDePersonagens();
  }

  carregarListaDePersonagens() {
    this.personagemService
      .obterTodosPersonagens()
      .subscribe(
        response => {
          this.personagens = response.data.results;
          this.personagens.map(item => {
            item.urlImagem = `${item.thumbnail.path}.${item.thumbnail.extension}`;
          });
        },
        error => console.error(error)
      );
  }
}
