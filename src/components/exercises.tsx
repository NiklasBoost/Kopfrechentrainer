import { useState, useEffect } from "react";
import {
  superEasyExercises,
  generatingSuperEasyExercises,
  easyExercises,
  generatingEasyExercises,
  middleExercises,
  generatingMiddleExercises,
  hardExercises,
  generatingHardExercises
} from "../data/data-generating";
import { easyExerciseType, hardExerciseType, middleExerciseType, superEasyExerciseType } from "../types/generatingTypes";
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
    } else if (currentLevel === 'hard') {
      return hardExercises as hardExerciseType[];
    } 
    return [] as (superEasyExerciseType | easyExerciseType | middleExerciseType | hardExerciseType)[];
  }

  useEffect(() => {    
    generatingSuperEasyExercises();
    generatingEasyExercises();
    generatingMiddleExercises();
    generatingHardExercises();

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
          setSelectedExercise(
            selectExercise.numbers.firstNumber + " " + 
            selectExercise.operant + " " + 
            selectExercise.numbers.secondNumber
          );
        } else if (currentLevel === 'middle') {
          setSelectedExercise(
            selectExercise.numbers.firstNumber + " " + 
            selectExercise.operants.firstOperant + " " + 
            selectExercise.numbers.secondNumber + " " + 
            selectExercise.operants.secondOperant + " " + 
            selectExercise.numbers.thirdNumber
          );
        } else if (currentLevel === 'hard') {
          setSelectedExercise(
            selectExercise.numbers.firstNumber + " " + 
            selectExercise.operants.firstOperant + " " + 
            selectExercise.numbers.secondNumber + " " + 
            selectExercise.operants.secondOperant + " " + 
            selectExercise.numbers.thirdNumber + " " +
            selectExercise.operants.thirdOperant + " " +
            selectExercise.numbers.fourthNumber            
          );

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
        `Yeah, ${userInput} is right!`
      );
    } else {
      setSolutionFeedback(`Oh no, ${userInput} is WRONG! Try again!`);
    }

    setTimeout(() => {
      setSolutionFeedback("");
    }, 1000);
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
      {solutionFeedback ? (
        <div className="h1">{solutionFeedback}</div>
        ):(
        <div className="h1">{selectedExercise}</div>
      )}
      <input
        placeholder="Deine Lösung (ENTER zum bestätigen, n zum überspringen)"
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="form-control"
      />
      <button
        type="button"
        className="btn btn-primary mt-1"
        onClick={() => {
          displaySolutionFeedback();
          setUserInput("");
          nextExercise();
        }}
      >
        Eingabe bestätigen
      </button>
      <button
        type="button"
        className="btn btn-secondary mt-1 ms-1"
        onClick={() => {
          nextExercise();
          removePoints(setPointsLose, setPoints, 30);
        }}
      >
        Aufgabe überspringen
      </button>
    </>
  );
};

export default Exercises;
