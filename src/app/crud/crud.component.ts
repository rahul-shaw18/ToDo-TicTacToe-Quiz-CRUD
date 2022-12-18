import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  enterText: any;

  public inputValue: any = [];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log(this.enterText);
  }

  onAddInputbtnClick(item: any) {
    if (item.value == '') {
      alert('Please enter The value');
    } else {
      this.inputValue.push({
        id: this.inputValue.length + 1,
        value: item.value,
        editMode: false,
      });
      item.value = '';
    }
  }

  onDeleteBtnClicked(item: any) {
    this.inputValue = this.inputValue.filter(
      (value: any) => value.id !== item.id
    );
  }
}
