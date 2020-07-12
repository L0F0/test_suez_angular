import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Experiences from '../../json-dir/experiences.json';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  private paramUrl: any;
  mySubscription: any;
  Companie: any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {      
      if (this.paramUrl != undefined && this.paramUrl != params) {
        this.paramUrl = params;
        this.ngOnInit();
      }
      this.paramUrl = params;
    } );
   }

   ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    let Companie = Experiences.find(x => x.companie === this.paramUrl.name);
    this.Companie = Companie;
  }

}
