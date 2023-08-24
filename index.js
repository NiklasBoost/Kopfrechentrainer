import { superEasyExercise } from "./exercise-classes.js";

const mathExercises = [];
let exerciseIndex;

generatingSuperEasyExercises();

document.querySelector('.next-exercise-button-js')
  .addEventListener('click', () => {
    const randomNumber = Math.random();
    exerciseIndex = Math.round(randomNumber * mathExercises.length);
    console.log(exerciseIndex);
    const exerciseDiv = document.querySelector('.math-exercise-div-js');

    const selectExercise = mathExercises[exerciseIndex];

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


document.querySelector('.confirm-input-button-js')
  .addEventListener('click', () => {

    compareInputWithSolution();

  });

function compareInputWithSolution() {
  const input = document.querySelector('.user-input-js').value;
  const solution = mathExercises[exerciseIndex].solution;

  console.log(input, solution);

  if(parseInt(input) === solution) {
    console.log(`Yeah, that's right!`);
  } else {
    console.log('No, wrong answer');
  }
}