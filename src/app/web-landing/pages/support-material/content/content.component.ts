import { Component, AfterContentInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import materialLinks from '../../../data/materialLinks.json'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }

  public materialLinks = materialLinks;
  currentPage = 1
  size: string;



  ngAfterContentInit(): void {
   // this.setPost(this.router.snapshot.params.id);
  }


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
