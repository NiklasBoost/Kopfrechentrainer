export interface superEasyExerciseType {
  numbers: {
    firstNumber: number;
    secondNumber: number;
  };
  operant: string;
  solution: number;
  level: string;
}

export interface easyExerciseType {
  numbers: {
    firstNumber: number;
    secondNumber: number;
  };
  operant: string;
  solution: number;
  level: string;
}

export interface middleExerciseType {
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
}