import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '@app/service/category/category.service';
import { QuizService } from '@app/service/quiz/quiz.service';

@Component({
  selector: 'app-update-quiz',
  standalone: false,
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.scss'
})

export class UpdateQuizComponent {
  
  constructor(private activatedRoute:ActivatedRoute, private quizService:QuizService, private categoryService:CategoryService){}
  qid:any;
  quizData:any={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions: '',
    active:true,
    category:{
      cid:'',
      title:'',
      descrption:''
    },
  };
  
  categories =[{
    cid:23,
    title:"domt"
  }]
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.qid = this.activatedRoute.snapshot.paramMap.get('qid');
    console.log(this.qid);
    
    this.getQuizData();
    
  }
  
  updateQuiz() {
    console.log("OOOOOO");
    console.log(this.quizData);
   this.quizService.updateQuiz(this.quizData).subscribe((data)=>{
    console.log(data);
    
   });
  }

  public getQuizData(){
    this.quizService.getQuiz(this.qid).subscribe((data)=>{
      this.quizData=data;
      console.log(this.quizData)
    })

    this.categoryService.getCategories().subscribe((data:any)=>{
      this.categories=data;
    })
  }



}
