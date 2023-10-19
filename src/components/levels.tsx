import { useState, useEffect } from "react";
import { pointInterval } from "../utils/earnedPoints";
import { LevelSystemTypes } from "../types/levelsTypes";

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
      levelcheck(points);
    }, [points])
    
   
    function levelcheck(ep: number) {
      if (ep > 1500) {
        setCurrentLevel('ultraKrass');
        setLevelNumber(4);
      } else if (ep > 1300) {
        setCurrentLevel('schwer');
        setLevelNumber(3);
      } else if (ep > 900) {
        setCurrentLevel('mittel');
        setLevelNumber(2);
      } else if (ep > 500) {
        setCurrentLevel('easy');
        setLevelNumber(1);
      } else {
        setCurrentLevel('superEasy');
        setLevelNumber(0);
      }
    }
  
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