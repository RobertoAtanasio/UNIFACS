import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { LivrosPage } from '../livros/livros';
import { EditoraPage } from '../editora/editora';
import { GeneroPage } from '../genero/genero';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LivrosPage;
  tab3Root = EditoraPage;
  tab4Root = GeneroPage;

  constructor() {

  }
}
