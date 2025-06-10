import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '@app/service/quiz/quiz.service';
import { error } from 'console';

@Component({
  selector: 'app-loadquiz',
  standalone: false,
  templateUrl: './loadquiz.component.html',
  styleUrl: './loadquiz.component.scss'
})
export class LoadquizComponent {
  catId:number=0;
  constructor(
    private  _route:ActivatedRoute, private quizService: QuizService
    ){}
    quizes:any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.catId= this._route.snapshot.params['catId'];
    console.log(this.catId);
    if (this.catId==0){
      this.quizService.getquizess().subscribe((data)=>{
        console.log(data)
        this.quizes=data;
      },
    (error)=>{
      console.log(error);
      
    })
    } else {
      // this.quizService.get

    }
  }

}
