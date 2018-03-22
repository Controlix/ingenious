import {Component, OnInit} from '@angular/core';
import {Goal} from '../domain/goal';
import {GoalCategory} from '../domain/goal-category';
import {SimulationResponseService} from "../domain/simulation-response.service";

@Component({
  selector: 'app-goal-create-dialog',
  templateUrl: './goal-create-dialog.component.html',
  styleUrls: [
    './goal-create-dialog.component.css'
  ]
})
export class GoalCreateDialogComponent implements OnInit {

  goal: Goal = new Goal();

  categories: any[] = [];
  display = true;


  constructor(private simulationResponseService: SimulationResponseService) {}

  ngOnInit() {
    this.categories = [
      {label: 'Car', value: GoalCategory.CAR},
      {label: 'House', value: GoalCategory.HOUSE},
      {label: 'Trip', value: GoalCategory.TRIP}
    ]
  }

  onSubmit() {
    this.display = false;
    this.simulationResponseService.simulateGoal(this.goal);
  }


}
