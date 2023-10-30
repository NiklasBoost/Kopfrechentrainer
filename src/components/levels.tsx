import { useState, useEffect } from "react";
import { pointInterval } from "../utils/earnedPoints";
import { LevelSystemTypes } from "../types/levelsTypes";
import { levelcheck } from "../utils/levelcheck";


const LevelSystem = ({ 
  points, 
  setPoints,
  pointsWin, 
  pointsLose,
  currentLevel,
  setCurrentLevel }: LevelSystemTypes) => {
 
    const [levelNumber, setLevelNumber] = useState(0);
    const [maxPoints, setMaxPoints] = useState(0);


    useEffect(() => {
      console.log('useEffect fürs Intervall');
      pointInterval(setPoints);
    }, [])
    
    useEffect(() => {
      levelcheck(points, setCurrentLevel, setLevelNumber);
    }, [points])

    useEffect(() => {
      if(levelNumber === 0) {
        setMaxPoints(300);
      } else if(levelNumber === 1) {
        setMaxPoints(600);
      } else if(levelNumber === 2) {
        setMaxPoints(900);
      } else if(levelNumber === 3) {
        setMaxPoints(1200);
      }
    }, [levelNumber])
    
  return (
    <>
      <div className="level-system me-3">
        { points > 1200 ? (
          <h1>DU HAST GEWONNEN!</h1>
        ):(
          <h5>Level {levelNumber}: {currentLevel}</h5>
        )}
        <div className="mt-1">Deine Punkte: {Math.round(points)}</div>
        <div className="progress mt-1" role="progressbar" aria-label="Points" aria-valuenow={ points } aria-valuemin={ 0 } aria-valuemax={ maxPoints }>
          <div className="progress-bar" style={{ width: `${(100 * points) / maxPoints}%` }}>{Math.round(points)}/{maxPoints}</div>
        </div>

        <div>
          {!pointsWin && !pointsLose ? (
            <div className="invisible">Platzhalter</div>
          ):(
            <>
              {pointsWin != 0 && <div style= {{fontStyle: "italic"}}>Punkte gewonnen: {pointsWin}</div>}
              {pointsLose != 0 && <div style= {{fontStyle: "italic"}}>Punkte verloren: {pointsLose}</div>}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default LevelSystem;