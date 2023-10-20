import { useState, useEffect } from "react";
import {
  superEasyExercises,
  generatingSuperEasyExercises,
  easyExercises,
  generatingEasyExercises,
  middleExercises,
  generatingMiddleExercises
} from "../data/data-generating";
import { easyExerciseType, middleExerciseType, superEasyExerciseType } from "../types/generatingTypes";
import { compareWithSolution } from "../utils/compareWithSolution";
import { removePoints } from "../utils/pointsChanges";
import { ExercisesTypes } from "../types/exercisesTypes";
import { earnedPointsTimer } from "../utils/earnedPoints";

const Exercises = ({
  setPoints,
  setPointsWin,
  setPointsLose,
  currentLevel,
}: ExercisesTypes) => {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState("");
  const [userInput, setUserInput] = useState("");
  const [solutionFeedback, setSolutionFeedback] = useState("");

  const currentArray = () => {
    if (currentLevel === 'superEasy') {
      return superEasyExercises as superEasyExerciseType[];
    } else if (currentLevel === 'easy') {
      return easyExercises as easyExerciseType[];
    } else if (currentLevel === 'middle') {
      return middleExercises as middleExerciseType[];
    }
    return [] as (superEasyExerciseType | easyExerciseType | middleExerciseType)[];
    // } else if (currentLevel === 'hard') {
    //   return;
    // } 
  }

  useEffect(() => {    
    generatingSuperEasyExercises();
    generatingEasyExercises();
    generatingMiddleExercises();

    nextExercise();
  }, []);


  function nextExercise() {
    const currentArrayValue = currentArray();
    if (currentArrayValue) {
      setExerciseIndex((prevIndex) => {
        const newIndex = Math.round(Math.random() * currentArrayValue.length);
        // console.log(newIndex);
  
        const selectExercise = currentArrayValue[newIndex];
        console.log(currentLevel);
        if (currentLevel === 'easy' || currentLevel === 'superEasy') {
          setSelectedExercise(selectExercise.numbers.firstNumber + " " + selectExercise.operant + " " + selectExercise.numbers.secondNumber);
        } else if (currentLevel === 'middle') {
          setSelectedExercise(selectExercise.numbers.firstNumber + " " + selectExercise.operants.firstOperant + " " + selectExercise.numbers.secondNumber + " " + selectExercise.operants.secondOperant + " " + selectExercise.numbers.thirdNumber);
        }
        earnedPointsTimer();
        return newIndex; // Gib den neuen Index zurück
      });
    }
  }

  function displaySolutionFeedback() {
    const rightOrWrong = compareWithSolution(
      setPointsWin,
      setPointsLose,
      setPoints,
      currentArray,
      userInput,
      exerciseIndex
    );

    if (rightOrWrong) {
      setSolutionFeedback(
        `Yeah, ${userInput} is right your hell good motherfucker!`
      );
    } else {
      setSolutionFeedback(`Oh no, ${userInput} is WRONG; you dumbass idiot!`);
    }

    setTimeout(() => {
      setSolutionFeedback("");
    }, 3000);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setUserInput(newValue);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      displaySolutionFeedback();
      setUserInput("");
      nextExercise();
    } else if (e.key === "n") {
      e.preventDefault();
      nextExercise();
    }
  }

  return (
    <>
      <div>{selectedExercise}</div>
      <input
        placeholder="Ergebnis"
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={() => {
          displaySolutionFeedback();
          setUserInput("");
          nextExercise();
        }}
      >
        Eingabe bestätigen
      </button>
      <button
        onClick={() => {
          nextExercise();
          removePoints(setPointsLose, setPoints, 30);
        }}
      >
        Aufgabe überspringen
      </button>
      <div>{solutionFeedback}</div>
    </>
  );
};

export default Exercises;
