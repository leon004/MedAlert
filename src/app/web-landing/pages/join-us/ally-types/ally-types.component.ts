import { Component, OnInit } from '@angular/core';
import allyTypes from '../../../data/ally-types.json';

@Component({
  selector: 'app-ally-types',
  templateUrl: './ally-types.component.html',
  styleUrls: ['./ally-types.component.css']
})
export class AllyTypesComponent implements OnInit {

  constructor() { }
  public allyTypes = allyTypes;

  ngOnInit(): void {
  }

}
