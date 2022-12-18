import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  public currentQuestionIndex = 0;
  public progress_value: boolean = false;
  public begin: boolean = true;
  public end: boolean = true;
  public incorrect: boolean = false;
  public rightAnswer: number = 0;
  public wrongAnswer: number = 0;

  public currentSelectedAnswer = '';

  public noOfQuestionAnsweredCorrectly: number = 0;
  public noOfQuestionAnsweredIncorrectly: number = 0;

  public timer: any;
  count = 5;
  public currentCorrectAnswer = '';
  public questionArray: any[] = [
    {
      question: 'HTML Full Form',
      options: [
        'Cascading Style Sheets',
        'Application Programming Interface',
        'Hypertext Markup Language',
        'Javascript',
      ],
      correctAnswer: 'Hypertext Markup Language',
    },
    {
      question: 'CSS Full Form',
      options: [
        'Hypertext Markup Language',
        'Cascading Style Sheets',
        'Application Programming Interface',
        'Javascript',
      ],
      correctAnswer: 'Cascading Style Sheets',
    },
    {
      question: 'JS Full Form',
      options: [
        'Application Programming Interface',
        'Cascading Style Sheets',
        'Javascript',
        'Hypertext Markup Language',
      ],
      correctAnswer: 'Javascript',
    },
    {
      question: 'ng is used in?',
      options: ['Angular', 'React', 'Vue', 'SpringBoot'],
      correctAnswer: 'Angular',
    },
    {
      question: 'API Full Form',
      options: [
        'Application Programming Interface',
        'Cascading Style Sheets',
        'Javascript',
        'Hypertext Markup Language',
      ],
      correctAnswer: 'Application Programming Interface',
    },
  ];

  public isChecked: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.begin = true;
    this.progress_value = true;
    this.timer = setInterval(() => {
      this.count--;
      if (this.count <= 0) {
        clearInterval(this.timer);
        this.progress_value = false;
      }
    }, 1000);
    this.begin = true;
    this.end = false;
  }

  checkAnswer(option: any) {
    if (option == this.questionArray[this.currentQuestionIndex].correctAnswer) {
      this.currentCorrectAnswer =
        this.questionArray[this.currentQuestionIndex].correctAnswer;
      this.noOfQuestionAnsweredCorrectly++;
    } else {
      this.currentSelectedAnswer = option;
      this.currentCorrectAnswer =
        this.questionArray[this.currentQuestionIndex].correctAnswer;
      this.noOfQuestionAnsweredIncorrectly++;
    }
    this.incorrect = true;
  }

  nextQuestion() {
    this.rightAnswer = this.noOfQuestionAnsweredCorrectly;
    this.wrongAnswer = this.noOfQuestionAnsweredIncorrectly;
    this.currentSelectedAnswer = '';
    clearInterval(this.timer);
    this.count = 5;
    this.currentCorrectAnswer = '';
    this.progress_value = false;

    this.incorrect = false;
    if (this.currentQuestionIndex < 4) {
      this.currentQuestionIndex += 1;
    } else {
      // this.currentQuestionIndex = 0;
    }
    this.timer = setInterval(() => {
      this.progress_value = true;
      this.count--;
      if (this.count <= 0) {
        this.progress_value = false;
        clearInterval(this.timer);
      }
    }, 1000);
  }
}
