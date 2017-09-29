import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FormGeneroPage } from '../form-genero/form-genero';

@IonicPage()
@Component({
  selector: 'page-genero',
  templateUrl: 'genero.html',
})

export class GeneroPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl : AlertController,
    private modalCtrl : ModalController,
    public toastCtrl: ToastController
  ) {
    this.initializeItems();
  }

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

  onCancel(ev) {
    ev.target.value = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneroPage');
  }

  removerGenero (g : any) {

    let confirm = this.alertCtrl.create({
      title: 'Exclusão de Gênero',
      message: 'Confirma a exclusão do gênero: ' + g + '?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.delItem(g);
            this.initializeItems();
          }
        }
      ]
    });
    confirm.present();
  }

  voltaPagina() {

    let modal = this.modalCtrl.create (TabsPage);
    modal.present ();

  }

  delItem(item){

    var indice = 0;

    for (var i = 0; i < this.generos_json.length; i++) {
      if (item == this.generos_json[i].nome) {
        indice = i;
        break;
      }
    }

    //const index = this.generos_json.indexOf(item);

    const elementoRemovido = this.generos_json.splice(indice, 1);

    //this.objeto_searchbar.value = "";

    this.showToast("Registro Excluído com Sucesso!")
  }

  showToast(mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 1000,
      position: 'middle'
    });

    toast.present(toast);
  }

  showAlerta(mensagem: any) {

    let alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();

  }

  abrirFormCadastroGenero() {

    let modal = this.modalCtrl.create (FormGeneroPage);

    modal.present ();

  }
}
