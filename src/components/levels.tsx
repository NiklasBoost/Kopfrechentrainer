import { useState, useEffect } from "react";
import { pointInterval } from "../utils/earnedPoints";
import { LevelSystemTypes } from "../types/levelsTypes";
import { levelcheck } from "../utils/levelcheck";

const LevelSystem = ({ 
  points, 
  setPoints,
  pointsWin, 
  pointsLose }: LevelSystemTypes) => {
 
    const [currentLevel, setCurrentLevel] = useState('superEasy');
    const [levelNumber, setLevelNumber] = useState(0);


    useEffect(() => {
      console.log('useEffect fürs Intervall');
      pointInterval(setPoints);
    }, [])
    
    useEffect(() => {
      levelcheck(points, setCurrentLevel, setLevelNumber);
    }, [points])
    
  return (
    <div className="level-system">
      <div>Level {levelNumber}: {currentLevel}</div>
      <div>Your Points: {Math.round(points)}</div>
      <div>
        {pointsWin !== 0 && <div>Points Win: {pointsWin}</div>}
        {pointsLose!== 0 && <div>Points Lose: {pointsLose}</div>}</div>
    </div>
  )
}

export default LevelSystem;