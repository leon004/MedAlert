import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  // Footer style
  classname = "";
  ftlogo = "assets/img/tp/logo-y-w.png";
  ftshape = "assets/img/lines/01.png";
  ftshape2 = "assets/img/lines/02.png";
  ftshapeclass = "line-one";
  ftshape2class = "line-two";

  constructor() { }

  ngOnInit(): void {
  }

}
