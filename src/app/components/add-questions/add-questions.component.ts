import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '@app/service/question/question.service';

@Component({
  selector: 'app-add-questions',
  standalone: false,
  templateUrl: './add-questions.component.html',
  styleUrl: './add-questions.component.scss'
})
export class AddQuestionsComponent implements OnInit {
  
  qid:any;
  question={
    quiz:{
      qid:""
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  }
  
  
  constructor(private activated:ActivatedRoute, private questionService:QuestionService){}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.qid = this.activated.snapshot.params["qId"];
    this.question.quiz.qid=this.qid
    console.log(this.qid);
    
  
  }
  addQuestions() {
    console.log(this.question);
    
    this.questionService.addQuestion(this.question).subscribe((data:any)=>{
      console.log(data);
    })
  }


}
