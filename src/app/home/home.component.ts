import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoogleMapsModule} from "@angular/google-maps";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  markers: google.maps.LatLngLiteral[] = [];
  markerOptions: google.maps.MarkerOptions = {draggable: false};

  addLocation($event: google.maps.MapMouseEvent | google.maps.IconMouseEvent) {
    const latLngJson = $event.latLng?.toJSON();
    console.log(latLngJson)
    if (!latLngJson) {
      console.warn("lat lng undefined!")
      return;
    }
    this.markers.push(latLngJson)
  }
}
