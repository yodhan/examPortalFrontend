import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  constructor(private http:HttpClient) { }

  public getquizess(){
    console.log("calling");
    
     return this.http.get(`${environment.apiBaseUrl}quiz/`);
  }

  public createQuiz(quizData:any){
    return this.http.post(`${environment.apiBaseUrl}quiz/`,quizData);
  }
  public deleteeQuiz(qid:any){
    console.log(qid);
    
    return this.http.delete(`${environment.apiBaseUrl}quiz/${qid}`);
  }


}
