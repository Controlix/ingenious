export class SimulationResult {

  title: string;
  advise: string;

  constructor(title: string, advise: string) {
    this.title = title;
    this.advise = advise;
  }
}

export class SimulationResults {

  totalIncome: number;
  totalExpense: number;
  totalSavings: number;

  results: SimulationResult[] = [];

  constructor(results: SimulationResult[], totalIncome: number, totalExpense: number, totalSavings: number) {
    this.totalIncome = totalIncome;
    this.totalExpense = totalExpense;
    this.totalSavings = totalSavings;
    this.results = results;
  }
}
