import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {


    // console.log(scroll);
  }
  // Footer style
  classname = "";
  ftlogo = "assets/img/tp/logo-y-w.png";
  ftshape = "assets/img/lines/01.png";
  ftshape2 = "assets/img/lines/02.png";
  ftshapeclass = "line-one";
  ftshape2class = "line-two";

  ngOnInit(): void {

  }


  moveToExact(section) {
    const blue = document.getElementById(section);
    let position = blue.getBoundingClientRect();
    let target = position.top + window.scrollY - 500;

    console.log(target)
    // scrolls to 20px above element
    window.scrollTo({left:position.left, top:position.top + window.scrollY - 100,behavior:'smooth'});
  };

}
