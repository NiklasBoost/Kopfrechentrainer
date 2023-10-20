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

export class easyExercise {
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

export class middleExercise {
  numbers: {
    firstNumber: number;
    secondNumber: number;
    thirdNumber: number;
  };
  operants: {
    firstOperant: string;
    secondOperant: string;
  };
  solution: number;
  level: string;

  constructor(firstNumber: number, secondNumber: number, thirdNumber: number, firstOperant: string, secondOperant: string, solution: number) {
    this.numbers = {
      firstNumber,
      secondNumber,
      thirdNumber,
    };
    this.operants = {
      firstOperant,
      secondOperant
    };
    this.solution = solution;
    this.level = 'middle';
  }
}