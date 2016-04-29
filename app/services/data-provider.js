import {Injectable} from 'angular2/core';
import {PouchDB} from 'pouchdb';

@Injectable()
export class DataProvider {  

  constructor() {
    console.log('nameselector constructor');
    
  }

  getName() {
    return 'REzsoke';
  }

  searchPhotos(query) {
    return fetch(`http://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=[your api key here]&texts=${query}&format=json`).then(function(response) {
      return response;
    });
  }
}