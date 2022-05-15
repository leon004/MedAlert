import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportTypes } from 'src/app/core/models/ReportTypes';

@Component({
  selector: 'app-what-happen-modal',
  templateUrl: './what-happen-modal.component.html',
  styleUrls: ['./what-happen-modal.component.scss']
})
export class WhatHappenModalComponent implements OnInit {


  @Input() reportType:ReportTypes;


  constructor(public activeModal: NgbActiveModal) {

  }



  ngOnInit(): void {
  }

}
