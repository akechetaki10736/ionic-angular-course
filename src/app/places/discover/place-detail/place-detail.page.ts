import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreatingBookingComponent } from 'src/app/bookings/creating-booking/creating-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss']
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlacesService, private modalCtrl: ModalController) {}

  ngOnInit( ) {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    })  
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop();
    this.modalCtrl.create({
      component: CreatingBookingComponent,
      componentProps: { selectedPlace: this.place }}).then(modalElement => {
          modalElement.present();
          return modalElement.onDidDismiss();
        }
      ).then(result =>{
        console.log(result.data, result.role);
        if(result.role === 'confirm'){
          console.log('Booked');
        }
      });
  
  }
}
