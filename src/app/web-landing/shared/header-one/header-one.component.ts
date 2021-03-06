import { Component, OnInit, HostListener, Inject, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import navigation from '../../data/navigation.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})
export class HeaderOneComponent implements OnInit {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  @Output()
  event = new EventEmitter<Object>();

  constructor(@Inject(DOCUMENT) private document: Document) { }
  // Sticky Nav
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    //set up the div "id=nav"
    if (document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100) {
      document.getElementById('can-sticky').classList.add('sticky-on');
    }
    else {
      document.getElementById('can-sticky').classList.remove('sticky-on');
    }
  }
  public navigation = navigation;
  // Navigation
  navmethod: boolean = true;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }
  // Mobile
  open: boolean = false;
  trigger(item: { open: boolean; }){
    item.open = !item.open;
  }
  // Add class on resize and onload window
  visible: boolean = false;
  breakpoint: number = 991;
  public innerWidth: any;
  detectHeader() {
    this.innerWidth = window.innerWidth;
    this.visible = this.innerWidth >= this.breakpoint;
  }
  ngOnInit(): void {
    this.detectHeader();
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  goToSection(section: string, eventoDefault) {
    eventoDefault.preventDefault();
    let message =  {section,behavior:'smooth'}

  }


}
