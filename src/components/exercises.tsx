import { useState, useEffect } from "react";
import {
  superEasyExercises,
  generatingSuperEasyExercises,
} from "../data/data-generating";
import { compareWithSolution } from "../utils/compareWithSolution";
import { removePoints } from "../utils/pointsChanges";
import { ExercisesTypes } from "../types/exercisesTypes";
import { earnedPointsTimer } from "../utils/earnedPoints";

const Exercises = ({
  points,
  setPoints,
  pointsWin,
  pointsLose,
  setPointsWin,
  setPointsLose,
}: ExercisesTypes) => {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState("");
  const [userInput, setUserInput] = useState("");
  const [solutionFeedback, setSolutionFeedback] = useState("");

  //initialize the easiest exercise at first
  useEffect(() => {
    generatingSuperEasyExercises();
    nextExercise();
  }, []);

  function nextExercise() {
    setExerciseIndex((prevIndex) => {
      const newIndex = Math.round(Math.random() * superEasyExercises.length);
      console.log(newIndex);

      const selectExercise = superEasyExercises[newIndex];
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

  function displaySolutionFeedback() {
    const rightOrWrong = compareWithSolution(
      setPointsWin,
      setPointsLose,
      setPoints,
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
