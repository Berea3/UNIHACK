import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule} from "@angular/google-maps";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
