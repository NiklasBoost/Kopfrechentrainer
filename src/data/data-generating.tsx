import { superEasyExercise } from "../classes/generating";
import { superEasyExerciseType } from "../types/generating";

export const superEasyExercises: superEasyExerciseType[] = [];

export function generatingSuperEasyExercises() {
  for(let i = 0; i < 500; i++) {
    let number1 = Math.floor(Math.random() * 21); 
    let number2 = Math.floor(Math.random() * 21); 
    if (i < 250) {
      let solution = number1 + number2;
      const exercise = new superEasyExercise(number1, number2, '+', solution);
      superEasyExercises.push(exercise);
    } else {
      let solution = number1 - number2;
      const exercise = new superEasyExercise(number1, number2, '-', solution);
      superEasyExercises.push(exercise);
    }
  }
  console.log(superEasyExercises);
}

