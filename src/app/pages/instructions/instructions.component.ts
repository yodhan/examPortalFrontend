import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '@app/service/quiz/quiz.service';
import { error } from 'console';

@Component({
  selector: 'app-instructions',
  standalone: false,
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.scss'
})
export class InstructionsComponent {
  qid: any;
  quiz:any;
  constructor(
    private _route:ActivatedRoute, private _quiz:QuizService
  )
  {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.qid= this._route.snapshot.params["qid"];
    console.log(this.qid)
    this._quiz.getQuiz(this.qid).subscribe((data)=>{
      this.quiz = data;
      console.log(data);
      
    },
  (error)=>{
    console.log(error);
    
  })
  }

}
