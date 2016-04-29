import {Page} from 'ionic-angular';
import {NameSelectorPage} from '../name-selector/name-selector';
import {SelectedNamesPage} from '../selected-names/selected-names';
import {DroppedNamesPage} from '../dropped-names/dropped-names';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.NameSelectorPage = NameSelectorPage;
    this.SelectedNamesPage = SelectedNamesPage;
    this.DroppedNamesPage = DroppedNamesPage;
  }
}
