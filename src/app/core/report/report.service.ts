import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Report } from '../models/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient:HttpClient) { }


  postReport(data) {
    const httpOptions = {
      headers: new HttpHeaders({
       "Content-Type": "multipart/form-data"
      })
    };


    return this.httpClient.post(environment.api_url + "/report", data)

  }

}
