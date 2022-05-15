import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import brands from '../../../data/brands.json';
import { YtVideoModalComponent } from './yt-video-modal/yt-video-modal.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  public brands = brands;
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

  ngOnInit(): void {
  }


  openYtModal(){
    const modalRef = this.modalService.open(YtVideoModalComponent,  {centered:true,size: 'lg', windowClass: 'yt-size'});
    modalRef.componentInstance.reportType = "";
  }

}
