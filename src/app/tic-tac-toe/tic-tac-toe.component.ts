import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent implements OnInit {
  @ViewChild('ttt') ref: any;
  public tictactoes: string[] = [];
  public value: any;
  public player1marks: any[] = [];
  public player2marks: any[] = [];
  public id: any;
  public winner: any;
  public counter = 1;
  public divIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  public cheatcode: any[] = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
  ];

  constructor() {}

  ngOnInit(): void {}

  put(div: any) {
    if (div.innerHTML == '') {
      if (this.counter > 9) return;
      if (this.counter % 2 != 0) {
        div.innerHTML = ' X';
        this.player1marks.push(div.id);
        // console.log('player1 marks' + this.player1marks);
        console.log('div id', div.id);
        let index = this.divIds.indexOf(div.id);
        console.log(index);
        this.divIds.splice(index, 1);
        let randomIndex = Math.floor(Math.random() * this.divIds.length);

        let randomDivId = this.divIds[randomIndex];
        console.log('random Div ID ' + randomDivId);

        for (let i = 0; i <= 2; i++) {
          for (let j = 0; j <= 2; j++) {
            if (
              this.ref['nativeElement']['children'][i]['children'][j].id ==
              randomDivId
            ) {
              this.ref['nativeElement']['children'][i]['children'][
                j
              ].innerHTML = 'O';
            }
          }
        }
        this.divIds.splice(randomIndex, 1);
      }

      this.counter + 2;
      console.log(this.divIds);
    }
    this.checkForWinner();
  }

  checkForWinner() {
    for (let item of this.cheatcode) {
      let flagOfPlayer1 = 0;
      let flagOfPlayer2 = 0;
      for (let i of item) {
        for (let mark of this.player1marks) {
          if (i == mark) {
            flagOfPlayer1 += 1;
            break;
          }
        }
        for (let mark of this.player2marks) {
          if (i == mark) {
            flagOfPlayer2 += 1;
            break;
          }
        }
      }
      if (flagOfPlayer1 == 3) {
        console.log('player 1 winner');
        // alert('player 1 winner');
        this.winner = 'Player 1 Won';

        break;
      }
      if (flagOfPlayer2 == 3) {
        console.log('player 2 winner');
        // alert('player 2 winner');
        this.winner = 'Player 2 Won';

        break;
      }
    }
  }

  reset() {
    console.log(this.ref);

    this.player1marks = [];
    this.player2marks = [];
    this.counter = 1;
    this.winner = '';

    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        this.ref['nativeElement']['children'][i]['children'][j].innerHTML = '';
      }
    }
  }
}
