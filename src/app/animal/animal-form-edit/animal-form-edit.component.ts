import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule} from "@angular/google-maps";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {Animal} from "../animal";
import {HttpClient} from "@angular/common/http";
import {MarkersService} from "../../markers.service";

@Component({
  selector: 'app-animal-form-edit',
  standalone: true,
    imports: [CommonModule, GoogleMapsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './animal-form-edit.component.html',
  styleUrl: './animal-form-edit.component.scss'
})
export class AnimalFormEditComponent {
    animal: Animal=new Animal();
    // service: marker;
    id: number;
    constructor(private http: HttpClient, private service: MarkersService) {
    }
//
//     marker: google.maps.LatLngLiteral;
//
    ngOnInit()
    {
        this.id = this.service.animalId;
        // @ts-ignore
        this.http.get<Animal>("http://localhost:8080/animal/readbyid/",+id).subscribe(
            (response: any)=>{
                this.animal=response;
            }
        )
    }
}
