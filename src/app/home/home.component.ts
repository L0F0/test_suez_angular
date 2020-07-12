import { Component, OnInit } from '@angular/core';
import Author from '../../json-dir/author.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Author = Author;
  constructor() { }

  ngOnInit(): void {
  }
  
}
