import { useState, useEffect, useRef } from "react";
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
import { compareInputWithSolution } from "../utils/compareWithSolution";
import { removePoints } from "../utils/pointsChanges";
import { ExercisesTypes } from "../types/exercisesTypes";
import { earnedPointsTimer } from "../utils/earnedPoints";
import { didRightMessages, didWrongMessages } from "../data/messages";

const Exercises = ({
  setPoints,
  setPointsWin,
  setPointsLose,
  currentLevel,
  isPaused }: ExercisesTypes) => {

  const inputFocusRef = useRef<HTMLInputElement | null>(null);

  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState("");
  const [userInput, setUserInput] = useState("");
  const [solutionFeedback, setSolutionFeedback] = useState("");

  const [skippingPoints, setSkippingPoints] = useState(1);

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
    if(inputFocusRef.current) {
      inputFocusRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if(inputFocusRef.current) {
      inputFocusRef.current.focus();
    }
  }, [exerciseIndex])

  useEffect(() => {
    nextExercise();
  }, [currentLevel])


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
          console.log(selectExercise.solution);
        } else if (currentLevel === 'middle') {
          setSelectedExercise(
            selectExercise.numbers.firstNumber + " " + 
            selectExercise.operants.firstOperant + " " + 
            selectExercise.numbers.secondNumber + " " + 
            selectExercise.operants.secondOperant + " " + 
            selectExercise.numbers.thirdNumber
          );
          console.log(selectExercise.solution);
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
          console.log(selectExercise.solution);
        }
        earnedPointsTimer();
        return newIndex; // Gib den neuen Index zurück
      });
    }
  }

  function displaySolutionFeedback() {
    const rightOrWrong = compareInputWithSolution(
      setPointsWin,
      setPointsLose,
      setPoints,
      currentArray,
      userInput,
      exerciseIndex
    );
    const randomIndex = Math.round(Math.random() * didRightMessages.length)
    if (rightOrWrong) {
      setSolutionFeedback(
        didRightMessages[randomIndex]
      );
    } else {
      setSolutionFeedback(
        didWrongMessages[randomIndex]
      );
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
    if(!isPaused) {
      if (e.key === "Enter") {
        displaySolutionFeedback();
        setUserInput("");
        nextExercise();
      } else if (e.key === "n") {
        e.preventDefault();
        nextExercise();
        removePoints(setPointsLose, setPoints, 30);
      }
    }
  }

  return (
    <>
      {isPaused ? (
      <div className="h1">Pause</div>
      ) : solutionFeedback ? (
        <div className="h1">{solutionFeedback}</div>
      ) : (
        <div className="h1">{selectedExercise}</div>
      )}
      <input
        ref={inputFocusRef}
        placeholder="Deine Lösung (ENTER zum bestätigen, n zum überspringen)"
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="form-control"
      />
      <button
        type="button"
        className="btn btn-primary mt-2"
        onClick={() => {
          if(!isPaused) {
            displaySolutionFeedback();
            setUserInput("");
            nextExercise();
          }
        }}
      >
        Eingabe bestätigen
      </button>
      <button
        type="button"
        className="btn btn-secondary mt-2 ms-1"
        onClick={() => {
          if(!isPaused) {
            nextExercise();
            removePoints(setPointsLose, setPoints, skippingPoints);
            setSkippingPoints(prevState => prevState*2)
          }
        }}
      >
        Aufgabe überspringen ({skippingPoints})
      </button>
    </>
  );
};

export default Exercises;
