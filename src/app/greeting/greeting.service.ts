import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  greetingUrl ="http://35.232.26.173:8080/greet?name=";
  greetingMessage: string="";
  

  constructor(private http: HttpClient) { }
  getGreeting(name: string) {
    this.http.get(this.greetingUrl + name).subscribe(data=>{
      this.greetingMessage=String(data);
    })
  }
}
