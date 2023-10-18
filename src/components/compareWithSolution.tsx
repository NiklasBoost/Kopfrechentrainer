import { superEasyExercises } from "../data/data-generating";
import { mathEarndedPoints, stopInterval } from "./earnedPoints";
import { addPoints, removePoints } from "./winOrLose";

//Erstmal ein Test, ob ich eine diese Function auch außerhalb platzieren kann. Vielleicht muss sie auch wieder umziehen
export function compareWithSolution(
  state: React.Dispatch<React.SetStateAction<number>>, 
  input: string, 
  index: number) {
  const solution = superEasyExercises[index].solution;

  console.log(index);
  stopInterval();

  if(parseInt(input) === solution) {
    console.log(`Yeah, that's right!`);
    addPoints(state, mathEarndedPoints());
    return true;
  } else {
    console.log('No, wrong answer');
    removePoints(state, 5);

    return false;
  }
}