import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-yt-video-modal',
  templateUrl: './yt-video-modal.component.html',
  styleUrls: ['./yt-video-modal.component.scss']
})
export class YtVideoModalComponent implements OnInit {

  @Input() url:string;


  constructor(public activeModal: NgbActiveModal) {

  }



  ngOnInit(): void {
  }



}
