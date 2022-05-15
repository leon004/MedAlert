import { Component, HostListener, OnInit } from '@angular/core';
import materialVideos from '../../../data/materialVideos.json';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  public materialVideos = materialVideos;
  currentPage = 1
  size: string;

  constructor() { }

  ngOnInit(): void {
    this.setPaginationSize();
  }

  setPaginationSize(){
    if (window.innerWidth <= 400) {
      this.size = '';
    }else{
      this.size = 'lg';
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setPaginationSize();
  }

  goToURL(url){

    if(url!==""&&url!==undefined)
    window.open(url);
  }
}
