import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditoraPage } from './editora';

@NgModule({
  declarations: [
    EditoraPage,
  ],
  imports: [
    IonicPageModule.forChild(EditoraPage),
  ],
})
export class EditoraPageModule {}
