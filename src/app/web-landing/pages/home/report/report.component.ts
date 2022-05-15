import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import reportTypes from '../../../data/report-types.json';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  longText = `Paciente masculino con trastorno de ansiedad y depresión, alergico a las nueces`;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  closeResult: string;

  constructor(private modalService: NgbModal) {}

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
