export class superEasyExercise {
  numbers: {
    firstNumber: number;
    secondNumber: number;
  };
  operant: string;
  solution: number;
  level: string;


  constructor(firstNumber: number, secondNumber: number, operant: string, solution: number) {
    this.numbers = {
      firstNumber,
      secondNumber,
    };
    this.operant = operant;
    this.solution = solution;
    this.level = 'superEasy';
  }
};

class EasyExercises {
  numbers: {
    firstNumber: number;
    secondNumber: number;
  };
  operant: string;
  solution: number;
  level: string;

  constructor(firstNumber: number, secondNumber: number, operant: string, solution: number) {
    this.numbers = {
      firstNumber,
      secondNumber,
    };
    this.operant = operant;
    this.solution = solution;
    this.level = 'easy';
  }
}