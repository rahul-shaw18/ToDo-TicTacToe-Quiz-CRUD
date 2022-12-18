import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [DatePipe],
})
export class TodoComponent implements OnInit {
  public myDate: any = new Date();
  public time: Date = new Date();
  public hours = this.myDate.getHours();
  public minutes = this.myDate.getMinutes();
  public newformat: any;
  public delete: any;
  public index = 0;

  public todo: any[] = [];

  ngOnInit(): void {}

  constructor(private datePipe: DatePipe) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    setInterval(() => {}, 1);
    // Check whether AM or PM
    this.newformat = this.hours >= 12 ? 'PM' : 'AM';

    // Find current hour in AM-PM Format
    this.hours = this.hours % 12;

    // To display "0" as "12"
    this.hours = this.hours ? this.hours : 12;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
  }
  addList(addTodo: any) {
    if (addTodo.value == '') {
      alert('Please add a Todo');
    } else {
      if (addTodo) {
        this.todo.push({
          id: this.todo.length,
          name: addTodo.value,
          isCompleted: false,
        });
        addTodo.value = '';
        this.index += 1;
      } else {
        alert('Enter Todo');
      }
    }
  }

  strikethrough(id: number) {
    this.todo[id].isCompleted = !this.todo[id].isCompleted;
  }

  removeList(id: any) {
    this.todo = this.todo.filter((item) => item.id !== id);
  }
}
