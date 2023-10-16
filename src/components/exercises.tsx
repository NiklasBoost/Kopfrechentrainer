const Exercises = () => {
  return (
    <>
      <div className="math-exercise-div-js"></div>
      <input 
        className="user-input-js" 
        placeholder="Ergebnis"
      />
      <button className="confirm-input-button-js">
        Eingabe bestätigen
      </button>
      <button className="next-exercise-button-js">
        Aufgabe überspringen
      </button>
      <div className="solution-feedback-js"></div>
    </>
  )
}

export default Exercises;