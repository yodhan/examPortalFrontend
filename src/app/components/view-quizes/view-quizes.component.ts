import { Component } from '@angular/core';
import { QuizService } from '@app/service/quiz/quiz.service';
import { log } from 'console';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-view-quizes',
	standalone: false,
	templateUrl: './view-quizes.component.html',
	styleUrl: './view-quizes.component.scss',
})
export class ViewQuizesComponent {
	quizzes = [
		{
			qid: 23,
			title: 'Basic Java Quiz',
			description: '',
			maxMarks: '50',
			numberOfQuestions: '20',
			active: '',
			category: {
				title: 'programming',
			},
		},
	];

	constructor(private quizService: QuizService) {}

	ngOnInit(): void {
		this.getquiz();
	}

	public getquiz() {
		console.log('grtgfhtgf');

		this.quizService.getquizess().subscribe(
			(data: any) => {
				this.quizzes = data;
				console.log(data);
			},
			(error) => {
				console.log(error);
				Swal.fire('Error !!', 'Error in loading data', 'error');
			}
		);
	}

	deleteQuiz(qId: any) {
		Swal.fire({
			icon: 'info',
			title: 'Are you sure?',
			confirmButtonText: 'Delete',
			showCancelButton: true,
		}).then((result) => {
			if (result.isConfirmed) {
				this.quizService.deleteeQuiz(qId).subscribe(
					(data) => {
						console.log(data);
						this.quizzes.filter((quiz) => quiz.qid != qId);
					},
					(error) => {
						console.log(error);
					}
				);
			}
		});
		console.log(qId);
	}
}
