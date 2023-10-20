import { easyExerciseType, superEasyExerciseType } from "../types/generatingTypes";
import { mathEarndedPoints, stopInterval } from "./earnedPoints";
import { addPoints, removePoints } from "./pointsChanges";

export function compareWithSolution(
  wState: React.Dispatch<React.SetStateAction<number>>,
  lState: React.Dispatch<React.SetStateAction<number>>,
  state: React.Dispatch<React.SetStateAction<number>>,
  cArray: () => (superEasyExerciseType | easyExerciseType)[],

  input: string,
  index: number
) {
  const array = cArray();
  
  const solution = array[index].solution;

  console.log(index);
  stopInterval();

  if (parseInt(input) === solution) {
    console.log(`Yeah, that's right!`);
    addPoints(wState, state, mathEarndedPoints());
    return true;
  } else {
    console.log("No, wrong answer");
    removePoints(lState, state, 5);

    return false;
  }

}
