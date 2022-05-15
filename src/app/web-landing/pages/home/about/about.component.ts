import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import reportTypes from '../../../data/report-types.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) {}
  list = [
    {text:"Business & Consulting Agency"},
    {text:"Awards Winning Business Comapny"},
    {text:"Business & Consulting Agency"},
    {text:"Awards Winning Business Comapny"},
  ];

  ngOnInit(): void {
  }


  public reportTypes = reportTypes;
  settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 700,
    arrows: true,
    fade: false,
    dots: false,
    swipe: true,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    ]
  };


}
