import { useState, useEffect } from "react";
import { superEasyExercises, generatingSuperEasyExercises } from "../data/data-generating";
import { compareWithSolution } from "./compareWithSolution";

const Exercises = () => {

  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState('');
  const [userInput, setUserInput] = useState('');
  const [solutionFeedback, setSolutionFeedback] = useState('');

  //initialize the easiest exercise at first
  useEffect(() => {
    generatingSuperEasyExercises();
    nextExercise();
  }, [])

  function nextExercise() {
    setExerciseIndex((prevIndex) => {
      const newIndex = Math.round(Math.random() * superEasyExercises.length);
      console.log(newIndex);
  
      const selectExercise = superEasyExercises[newIndex];
      setSelectedExercise(
        selectExercise.numbers.firstNumber +
          ' ' +
          selectExercise.operant +
          ' ' +
          selectExercise.numbers.secondNumber
      );
      return newIndex; // Gib den neuen Index zurück
    });
  }

  function displaySolutionFeedback() {
    const rightOrWrong = compareWithSolution(userInput, exerciseIndex);
    
    if (rightOrWrong) {
      setSolutionFeedback(`Yeah, ${userInput} is right your hell good motherfucker!`);
    } else {
      setSolutionFeedback(`Oh no, ${userInput} is WRONG; you dumbass idiot!`);
    }
  
    setTimeout(() => {
      setSolutionFeedback('');
    }, 3000);
    
  }
  
  
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
  }

  return (
    <>
      <div>{selectedExercise}</div>
      <input 
        placeholder="Ergebnis"
        value={userInput}
        onChange={handleInputChange}
      />
      <button 
        onClick={() => {
          displaySolutionFeedback();
          setUserInput('');
          nextExercise();
        }}
      >
        Eingabe bestätigen
      </button>
      <button 
        onClick={nextExercise}
      >
        Aufgabe überspringen
      </button>
      <div>{solutionFeedback}</div>
    </>
  )
}

export default Exercises;