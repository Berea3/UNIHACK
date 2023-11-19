import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MarkersService {
    animalId: number;
  // readonly #httpClient = inject(HttpClient);
  //
  // addMarker(position: google.maps.LatLngLiteral) {
  //   return firstValueFrom(this.#httpClient.post('', position))
  // }
}
