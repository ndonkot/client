import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
 // greetingUrl ="http://34.32.61.79/:8089/greet?name=";
 greetingUrl = "http://34.32.61.79/greet?name=";
greetingMessage: string="";
  

  constructor(private http: HttpClient) { }
  



  getGreeting(name: string) {
     this.http.get(this.greetingUrl + name, { responseType: 'text' })
    .subscribe({
      next: data => {
        this.greetingMessage = data;
      },
      error: error => {
        console.error('Error fetching greeting:', error);
      },
      complete: () => {
        console.log('Request completed');
      }
    });

   /*this.http.get(this.greetingUrl + name, { responseType: 'text' }).subscribe(data => {
      this.greetingMessage = data;
    }, error => {
      console.error('Error fetching greeting:', error);
    });*/
  }

  getGreetingAlt(name: string) {
    alert(name)
    this.http.get(this.greetingUrl + name).subscribe(data=>{
      
      this.greetingMessage=String(data);
    })
  }
}
