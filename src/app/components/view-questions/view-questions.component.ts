import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '@app/service/question/question.service';

@Component({
  selector: 'app-view-questions',
  standalone: false,
  templateUrl: './view-questions.component.html',
  styleUrl: './view-questions.component.scss'
})
export class ViewQuestionsComponent {
  constructor(private route:ActivatedRoute, private question:QuestionService){}
  qid:any;
  qTitle:any;
  questions=[
    {
      content:"",
      option1:"",
      option2:"",
      option3:"",
      option4:""
    }
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.qid = this.route.snapshot.params['qid'];
   this.qTitle = this.route.snapshot.params['title'];
   console.log(this.route.snapshot.params);
   
   this.question.getQuestionsOfQuiz(this.qid).subscribe((data:any)=>{
    this.questions=data;
    console.log(data);
    
   })

}
}
