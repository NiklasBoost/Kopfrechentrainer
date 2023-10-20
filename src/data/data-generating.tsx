import { superEasyExercise, easyExercise } from "../classes/generating";
import { easyExerciseType, superEasyExerciseType } from "../types/generatingTypes";

export const superEasyExercises: superEasyExerciseType[] = [];
export const easyExercises: easyExerciseType[] = [];

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

export function generatingEasyExercises() {
  for(let i = 0; i < 3000; i++) {
    let number1 = Math.floor(Math.random() * 150); 
    let number2 = Math.floor(Math.random() * 150); 
    if (i < 1500) {
      let solution = number1 + number2;
      const exercise = new easyExercise(number1, number2, '+', solution);
      easyExercises.push(exercise);
    } else {
      let solution = number1 - number2;
      const exercise = new easyExercise(number1, number2, '-', solution);
      easyExercises.push(exercise);
    }
  }
  console.log(easyExercises);
}
