import { superEasyExercises } from "../data/data-generating";

//Erstmal ein Test, ob ich eine diese Function auch außerhalb platzieren kann. Vielleicht muss sie auch wieder umziehen
export function compareWithSolution(input: string, index: number) {
  const solution = superEasyExercises[index].solution;

  console.log(index);

  if(parseInt(input) === solution) {
    console.log(`Yeah, that's right!`);
    
    return true;
  } else {
    console.log('No, wrong answer');

    return false;
  }
}