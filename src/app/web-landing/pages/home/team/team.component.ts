import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import team from '../../../data/team.json';
import { TeamModalComponent } from './team-modal/team-modal.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private modalService: NgbModal) {}
  public team = team;
  settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: false,
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


  openTeamModal(id){
    const modalRef = this.modalService.open(TeamModalComponent, { size: 'lg' });
    modalRef.componentInstance.team = team[id];
  }
}
