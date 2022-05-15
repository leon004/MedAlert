import { AfterViewInit, Component, OnInit } from '@angular/core';
import results from '../../../data/results.json';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit,AfterViewInit {

  constructor() { }
  public results = results;
  public a=[]
  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    // let counterStop:any = setInterval(()=>{
    //   this.results[0].startValue++;
    //   if(this.results[0].startValue == this.results[0].endValue){
    //     clearInterval(counterStop)
    //   }
    // })
  }

  onCountoEnd(){
    
  }
}
