import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Goal } from '../domain/goal';

@Injectable()
export class SimulationService {

 /* private goalDefined: Subject<Goal> = new Subject<Goal>();

  goalDefined$ = this.goalDefined.asObservable();

  constructor() {}

  simulateGoal(goal: Goal) {
    this.goalDefined.next(goal);
  }*/
}
