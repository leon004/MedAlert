import { Component, OnInit } from '@angular/core';
import brands from '../../data/brands.json';
import teamblock from '../../data/team.json';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor() { }
  public brands = brands;
  settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
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

  ngOnInit(): void {
  }

}
