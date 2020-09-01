import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  public title:any;

  constructor() {
    this.title="Angular App is Running"
  }

  ngOnInit(): void {
  }

}
