// Exercises of the first level have just two numbers and only plus and minus. The Numbers going not higher than 50
export class superEasyExercise {
  constructor(firstNumber, secondNumber, operant, solution) {
    this.numbers = {
      firstNumber,
      secondNumber,
    };
    this.operant = operant;
    this.solution = solution;
    this.level = 'supereasy';
  }
};
