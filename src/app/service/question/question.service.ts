import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }


  public getQuestionsOfQuiz(qid:any){
    return this.http.get(`${environment.apiBaseUrl}question/quiz/${qid}`);

  }

  public addQuestion(question:any){
    debugger;
     return this.http.post(`${environment.apiBaseUrl}question/`,question);
  }
}
