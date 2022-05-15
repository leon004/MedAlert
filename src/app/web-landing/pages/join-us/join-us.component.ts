import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  constructor() { }
  // Footer style
  classname = "";
  ftlogo = "assets/img/tp/logo-y-w.png";
  ftshape = "assets/img/lines/01.png";
  ftshape2 = "assets/img/lines/02.png";
  ftshapeclass = "line-one";
  ftshape2class = "line-two";

  ngOnInit(): void {
  }

}
