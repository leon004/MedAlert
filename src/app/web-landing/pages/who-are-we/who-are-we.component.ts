import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-who-are-we',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.css']
})
export class WhoAreWeComponent implements OnInit, AfterViewInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }
  // Footer style
  classname = "";
  ftlogo = "assets/img/tp/logo-y-w.png";
  ftshape = "assets/img/lines/01.png";
  ftshape2 = "assets/img/lines/02.png";
  ftshapeclass = "line-one";
  ftshape2class = "line-two";

  ngOnInit(): void {

  
          
     
  }

  ngAfterViewInit(): void {

      this.activatedRoute.paramMap.subscribe(params => {
        setTimeout(() => {
              this.moveToExact(params.get('section'));
            });
  
       
        });
  }



  moveToExact(section) {

    let offset = 200;
    switch(section){
      case 'results':{
        offset = 320;
      }
    }

    const blue = document.getElementById(section);
    let position = blue.getBoundingClientRect();

    // scrolls to 20px above element
    window.scrollTo({left:position.left, top:position.top + window.scrollY - offset,behavior:'smooth'});
  };
}
