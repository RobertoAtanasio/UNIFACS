import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-genero',
  templateUrl: 'genero.html',
})

export class GeneroPage {

  public generos_json = [
  {nome: "Biográficos"},
  {nome: "Didáticos"},
  {nome: "Épicos"},
  {nome: "Ficção"},
  {nome: "Fantasia"},
  {nome: "Infantis"},
  {nome: "Política"},
  {nome: "Autoajuda"},
  {nome: "Guias de viagens"},
  {nome: "Romances"}
  ]

  public itens = [];

  initializeItems() {

    this.itens = [];

    for (var i = 0; i < this.generos_json.length; i++) {
      this.itens.push(this.generos_json[i].nome)
    }

    /*
    let alert = this.alertCtrl.create({
      title: 'Gênero',
      subTitle: this.itens[0],
      buttons: ['OK']
    });
    alert.present();
    */
  }

  getItems(ev) {

      //--- inicializar os itens do array de gêneros
      this.initializeItems();

      //--- receber valor do parâmetro
      var param = ev.target.value;

      //--- se o parâmetro estiver vazio, não filtra os itens
      if (param && param.trim() != '') {
          this.itens = this.itens.filter((i) => {
            return (i.toLowerCase().indexOf(param.toLowerCase()) > -1);
          })
      }

    }


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl : AlertController,
    private modalCtrl : ModalController
    ) {
      this.initializeItems();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneroPage');
  }

  removerGenero (g : any) {

    let confirm = this.alertCtrl.create({
      title: 'Exclusão de Gênero',
      message: 'Confirma a exclusão do gênero: ' + g.nome + '?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.showAlerta(g);
          }
        }
      ]
    });
    confirm.present();
  }

  showAlerta(g : any) {

    let alert = this.alertCtrl.create({
      title: 'Gênero',
      subTitle: "Gênero '" + g.nome + "' excluído com sucesso!",
      buttons: ['OK']
    });
    alert.present();

  }

  voltaPagina() {

    let modal = this.modalCtrl.create (TabsPage);
    modal.present ();

  }

}
