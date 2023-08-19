import { superEasyExercise } from "./exercise-classes";

const mathExercises = [];

generatingSuperEasyExercises();

document.querySelector('.math-exercise-button-js')
  .addEventListener('click', () => {
    const randomNumber = Math.random();
    let index = Math.round(randomNumber * mathExercises.length);
    // console.log(index);
    const exerciseDiv = document.querySelector('.math-exercise-div-js');

    const selectExercise = mathExercises[index];

    exerciseDiv.innerHTML = selectExercise.numbers.firstNumber + ' ' + selectExercise.operant + ' ' + selectExercise.numbers.secondNumber;
  });

function generatingSuperEasyExercises() {
  for(let i = 0; i < 5000; i++) {
    let number1 = Math.floor(Math.random() * 51); 
    let number2 = Math.floor(Math.random() * 51); 
    let solution = number1 + number2;
    if (i < 2500) {
      const exercise = new superEasyExercise(number1, number2, '+', solution);
      mathExercises.push(exercise);
    } else {
      const exercise = new superEasyExercise(number1, number2, '-', solution);
      mathExercises.push(exercise);
    }
  }
  console.log(mathExercises);
}
