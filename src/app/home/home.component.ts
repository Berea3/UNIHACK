import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoogleMapsModule} from "@angular/google-maps";
import {MarkersService} from "../markers.service";
import {HttpClient} from "@angular/common/http";
import {Animal} from "../animal/animal";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [CommonModule, GoogleMapsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
    markers: google.maps.LatLngLiteral[] = [];
    marker: google.maps.LatLngLiteral={lat:0,lng:0};
    markerOptions: google.maps.MarkerOptions = {draggable: false};
    // readonly #markersService = inject(MarkersService);
    animals: Animal[]=[];

    constructor(private http: HttpClient) {
    }

    ngOnInit()
    {
        console.log("proba");
        this.http.get<Animal[]>("http://localhost:8080/animal/readall").subscribe(
            (response: any)=>{
                this.animals=response;
                console.log(this.animals);
                for (let i=0;i<this.animals.length;i++)
                {
                    if (this.animals[i].latitude==null || this.animals[i].longitude==null) continue;
                    // this.marker.lat=this.animals[i].latitude;
                    // this.marker.lng=this.animals[i].longitude;
                    // this.markers.push(this.marker);
                    this.markers.push({lat:this.animals[i].latitude,lng:this.animals[i].longitude});
                    // console.log(this.marker);
                }
                // this.markers.push(this.marker);
                console.log(this.markers);
            }
        );
    }


  // async addLocation($event: google.maps.MapMouseEvent | google.maps.IconMouseEvent) {
  //   const latLngJson = $event.latLng?.toJSON();
  //   console.log(latLngJson)
  //   if (!latLngJson) {
  //     console.warn("lat lng undefined!")
  //     return;
  //   }
  //
  //   try {
  //     await this.#markersService.addMarker(latLngJson)
  //   } catch (e) {
  //     console.error(e)
  //     return;
  //   }
  //
  //   this.markers.push(latLngJson)
  // }
}
