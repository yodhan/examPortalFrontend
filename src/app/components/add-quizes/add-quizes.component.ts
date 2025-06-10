import { Component } from '@angular/core';
import { CategoryService } from '@app/service/category/category.service';
import { QuizService } from '@app/service/quiz/quiz.service';

@Component({
  selector: 'app-add-quizes',
  standalone: false,
  templateUrl: './add-quizes.component.html',
  styleUrl: './add-quizes.component.scss'
})
export class AddQuizesComponent {


  constructor(private categoryService:CategoryService, private quizService:QuizService){}

  categories =[{
    cid:23,
    title:"domt"
  }]

  quizData={
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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categoryService.getCategories().subscribe((data:any)=>{
      this.categories=data;
    })
  }

  public addQuiz(){
    this.quizService.createQuiz(this.quizData).subscribe((data)=>{
      console.log(data);
      
    })

  }

}
