import { useState, useEffect } from "react";
import { superEasyExercises, generatingSuperEasyExercises } from "../data/data-generating";

const Exercises = () => {

  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState('');

  //initialize the easiest exercise at first
  useEffect(() => {
    generatingSuperEasyExercises();
    nextExercise();
  }, [])

  function nextExercise() {
    const randomNumber = Math.random();
    setExerciseIndex(Math.round(randomNumber * superEasyExercises.length))
    console.log(exerciseIndex);
    
    const selectExercise = superEasyExercises[exerciseIndex];
    
    setSelectedExercise(selectExercise.numbers.firstNumber + ' ' + selectExercise.operant + ' ' + selectExercise.numbers.secondNumber);
  };

  return (
    <>
      <div>{selectedExercise}</div>
      <input 
        className="user-input-js" 
        placeholder="Ergebnis"
      />
      <button className="confirm-input-button-js">
        Eingabe bestätigen
      </button>
      <button 
        className="next-exercise-button-js"
        onClick={nextExercise}>
        Aufgabe überspringen
      </button>
      <div className="solution-feedback-js"></div>
    </>
  )
}

export default Exercises;