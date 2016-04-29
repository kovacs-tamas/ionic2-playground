import {Page, NavController} from 'ionic-angular';
import {DataProvider} from '../../services/data-provider';
/*s
  Generated class for the NameSelectorPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/selected-names/selected-names.html',
})
export class SelectedNamesPage {
  static get parameters() {
    return [[NavController], [DataProvider]];
  }

  constructor(nav, DataProvider) {
    this.nav = nav;
    this.db = DataProvider;


    console.log(this.db.getName());
    
  }
}