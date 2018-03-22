import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Goal} from '../domain/goal';
import {GoalCategory} from '../domain/goal-category';
import {SimulationService} from '../simulation/simulation.service';

@Component({
  selector: 'app-goal-create-dialog',
  templateUrl: './goal-create-dialog.component.html',
  styleUrls: [
    './goal-create-dialog.component.css'
  ]
})
export class GoalCreateDialogComponent implements OnInit {

  @Output() onCloseDialog: EventEmitter<any> = new EventEmitter();

  goal: Goal = new Goal();

  categories: any[] = [];
  display = true;


  constructor(private simulationResponseService: SimulationService) {}

  ngOnInit() {
    this.categories = [
      {label: 'Car', value: GoalCategory.CAR},
      {label: 'House', value: GoalCategory.HOUSE},
      {label: 'Travel', value: GoalCategory.TRAVEL}
    ]
  }

  onSubmit() {
    this.display = false;
    this.onCloseDialog.emit();
    this.simulationResponseService.simulateGoal(this.goal);
  }

  close() {
    this.display = false;
    this.onCloseDialog.emit();
  }
}
