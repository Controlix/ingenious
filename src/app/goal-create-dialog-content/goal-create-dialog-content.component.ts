import {Component, Input, OnInit} from '@angular/core';
import {Goal} from '../domain/goal';
import {GoalCategory} from '../domain/goal-category';

@Component({
  selector: 'app-goal-create-dialog-content',
  templateUrl: './goal-create-dialog-content.component.html',
  styleUrls: [
    './goal-create-dialog-content.component.css'
  ]
})
export class GoalCreateDialogContentComponent implements OnInit {

  goal: Goal = new Goal();

  submitted = false;
  categories: any[] = [];

  constructor() {}

  ngOnInit() {
    this.categories = [
      {label: 'Car', value: GoalCategory.CAR},
      {label: 'House', value: GoalCategory.HOUSE},
      {label: 'Trip', value: GoalCategory.TRIP}
    ]
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.goal);
  }


}
