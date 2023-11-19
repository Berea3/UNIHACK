import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {GoogleMapsModule} from "@angular/google-maps";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {Animal} from "../animal";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-animal-form',
    standalone: true,
    imports: [CommonModule, GoogleMapsModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatButtonModule, FormsModule, RouterLink],
    templateUrl: './animal-form.component.html',
    styleUrl: './animal-form.component.scss'
})
export default class AnimalFormComponent {
    animal: Animal=new Animal();
    constructor(private http: HttpClient) {}

    marker: google.maps.LatLngLiteral;

    addMarker(event: google.maps.MapMouseEvent) {
        // @ts-ignore
        // this.markerPositions.push(event.latLng.toJSON());
        this.marker=event.latLng.toJSON();
        // @ts-ignore
        console.log(event.latLng.lat());
        // console.log(this.markerPositions);
        // @ts-ignore
        this.animal.latitude=event.latLng.lat();
        // @ts-ignore
        this.animal.longitude=event.latLng.lng();
    }

    send()
    {
        console.log(this.animal);
        this.http.post("http://localhost:8080/animal/create",this.animal).subscribe(
            (response: any)=>{
                console.log(response);
            }
        )
    }
}
