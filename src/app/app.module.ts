import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';

import { TodoComponent } from './todo/todo.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';

const route: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'tictactoe', component: TicTacToeComponent },
  { path: 'crud', component: CrudComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,

    TodoComponent,
    TicTacToeComponent,
    CrudComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(route)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
