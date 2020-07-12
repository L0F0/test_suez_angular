import { Component, OnInit } from '@angular/core';
import Experiences from '../../json-dir/experiences.json';
import { ExperiencesComponent } from '../experiences/experiences.component';


@Component({
  selector: 'app-carrousel',
  template: `
  <div class="backImage">
    <div class="container">
      <div style="box-shadow: 0 26px 38px 38px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <ngb-carousel>
          <ng-template ngbSlide *ngFor='let exp of Experiences'>
            <a routerLink="/experiences/{{exp.companie}}">
              <div class="picsum-img-wrapper">
                <img src='../../assets/{{exp.photoBack}}' width="100%" height="500" alt="Random first slide">
              </div>
              <div class="carousel-caption">
                <h1 class="title is-1 has-text-grey-lighter is-bold">{{exp.companie}}</h1>
              </div>
            </a>
          </ng-template>
        </ngb-carousel>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  Experiences = Experiences;
  constructor() { }

  ngOnInit(): void {
  }

}
