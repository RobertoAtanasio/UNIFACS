import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-form-genero',
  templateUrl: 'form-genero.html',
})
export class FormGeneroPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl : AlertController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormGeneroPage');
  }

  cadastrarGenero() {

  }

  voltaPagina() {

    this.navCtrl.pop ();

  }
}
