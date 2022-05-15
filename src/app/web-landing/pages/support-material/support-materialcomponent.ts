import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-material',
  templateUrl: './support-material.component.html',
  styleUrls: ['./support-material.component.css']
})
export class SupportMaterialComponent implements OnInit {

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
