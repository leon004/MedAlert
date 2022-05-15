import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-what-is-modal',
  templateUrl: './what-is-modal.component.html',
  styleUrls: ['./what-is-modal.component.scss']
})
export class WhatIsModalComponent implements OnInit {



  constructor(public activeModal: NgbActiveModal) {

  }



  ngOnInit(): void {
  }





}
