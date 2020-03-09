import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Manhattan', 'heart of NYC', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lower_Manhattan_from_Jersey_City_November_2014_panorama_3.jpg/2880px-Lower_Manhattan_from_Jersey_City_November_2014_panorama_3.jpg', 149.99),
    new Place('p2', 'Taipei', 'captial of Taiwan', 'https://pix6.agoda.net/hotelImages/736992/0/8f22372a0c1f5073f0c07e666002637c.jpg?s=1024x768', 200),
    new Place('p3', 'Rivia', 'a small kimdom in north', 'https://vignette.wikia.nocookie.net/witcher/images/b/bf/Places_Lyria.png/revision/latest?cb=20090111105834', 250)
  ];

  get places(){
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
