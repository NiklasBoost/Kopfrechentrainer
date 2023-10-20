import { useState, useEffect } from "react";
import {
  superEasyExercises,
  generatingSuperEasyExercises,
  easyExercises,
  generatingEasyExercises
} from "../data/data-generating";
import { easyExerciseType, superEasyExerciseType } from "../types/generatingTypes";
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
    }
    return [] as (superEasyExerciseType | easyExerciseType)[];
    // } else if (currentLevel === 'middle') {
    //   return;
    // } else if (currentLevel === 'hard') {
    //   return;
    // } 
  }

  useEffect(() => {    
    generatingSuperEasyExercises();
    generatingEasyExercises();

    nextExercise();
  }, []);


  function nextExercise() {
    const currentArrayValue = currentArray();
    if (currentArrayValue) {
      setExerciseIndex((prevIndex) => {
        const newIndex = Math.round(Math.random() * currentArrayValue.length);
        console.log(newIndex);
  
        const selectExercise = currentArrayValue[newIndex];
        setSelectedExercise(
          selectExercise.numbers.firstNumber +
          " " +
          selectExercise.operant +
          " " +
          selectExercise.numbers.secondNumber
        );
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
