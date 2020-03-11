import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-creating-booking',
  templateUrl: './creating-booking.component.html',
  styleUrls: ['./creating-booking.component.scss'],
})
export class CreatingBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, "cancel");
  }

  onBookPlace(){
    this.modalCtrl.dismiss({
      message: 'This is a dummy message!'
    }, 'confirm')
  }

}
