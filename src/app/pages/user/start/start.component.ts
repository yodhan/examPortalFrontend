import { LocationStrategy } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '@app/service/question/question.service';

@Component({
	selector: 'app-start',
	standalone: false,
	templateUrl: './start.component.html',
	styleUrl: './start.component.scss',
})
export class StartComponent {
	qid: any;
	questions: any;
	correct: number = 0;
	score: number = 0;
	attempted: number = 0;
	submitFlag = false;
	timer: number = 0;
	constructor(
		private locationst: LocationStrategy,
		private _question: QuestionService,
		private _route: ActivatedRoute
	) {}
	ngOnInit(): void {
		this.qid = this._route.snapshot.params['qid'];
		this.preventBackButton();
		this.loadQuestions();
	}
	preventBackButton() {
		history.pushState(null, '', location.href);
		this.locationst.onPopState(() => {
			history.pushState(null, '', location.href);
		});
	}

	@HostListener('contextmenu', ['$event'])
	onRightClick(event: MouseEvent): void {
		console.log('RIGHT-CLICK EVENT FIRED! (from StartComponent)'); // <-- ADD THIS LINE
		event.preventDefault();
		console.log('Default context menu prevented.');
	}

	loadQuestions() {
		this._question.getQuestionsOfQuiz(this.qid).subscribe(
			(data) => {
				this.questions = data;
				this.timer=this.questions.length*2*60;
				this.questions.forEach((q: any) => {
					q['givenAnswer'] = '';
				});
				this.startTimer();

				console.log(data);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	submit(event?: any) {
		console.log(event);
		this.questions.forEach((q: any) => {
			console.log(q);
			if (q.answer === q.givenAnswer) {
				this.correct++;
			} else if (q.givenAnswer != '') {
				this.attempted++;
			}
		});
		this.submitFlag = true;

		const each =
			this.questions[0].quiz.maxMarks / this.questions[0].quiz.maxMarks;
		this.score = each * this.correct;
		console.log(this.score);
	}

	startTimer() {
		let t=window.setInterval(() => {
			if (this.timer <= 0) {
				this.submit();
				clearInterval(t);
			} else {
				this.timer--;
			}
		}, 1000);
	}
}
