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
        setMaxPoints(900)
      }
    }, [levelNumber])
    
  return (
    <>
      <div className="level-system">
        <div>Level {levelNumber}: {currentLevel}</div>
        <div>Your Points: {Math.round(points)}</div>
        <div className="progress" role="progressbar" aria-label="Points" aria-valuenow={ points } aria-valuemin={ 0 } aria-valuemax={ maxPoints }>
          <div className="progress-bar" style={{ width: `${(100 * points) / maxPoints}%` }}>{Math.round(points)}/{maxPoints}</div>
        </div>

        <div>
          {!pointsWin && !pointsLose ? (
            <div className="invisible">Platzhalter</div>
          ):(
            <>
              {pointsWin != 0 && <div>Points Win: {pointsWin}</div>}
              {pointsLose != 0 && <div>Points Lose: {pointsLose}</div>}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default LevelSystem;