import { easyExerciseType, hardExerciseType, middleExerciseType, superEasyExerciseType } from "../types/generatingTypes";
import { mathEarndedPoints } from "./earnedPoints";
import { addPoints, removePoints } from "./pointsChanges";

export function compareInputWithSolution(
  wState: React.Dispatch<React.SetStateAction<number>>,
  lState: React.Dispatch<React.SetStateAction<number>>,
  state: React.Dispatch<React.SetStateAction<number>>,
  cArray: () => (superEasyExerciseType | easyExerciseType | middleExerciseType | hardExerciseType)[],

  input: string,
  index: number
) {
  const array = cArray();
  
  const solution = array[index].solution;

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
