import { useState, useEffect } from "react";
import { pointInterval } from "./pointsInterval";
import { LevelSystemTypes } from "../types/levelsTypes";

const LevelSystem = ({ 
  points, 
  setPoints,
  pointsWin, 
  pointsLose }: LevelSystemTypes) => {
 

  useEffect(() => {
    console.log('useEffect fürs Intervall');
    pointInterval(setPoints);
  }, [])


  return (
    <div className="level-system">
      <div className="your-level your-level-js"></div>
      <div>Your Points: {Math.round(points)}</div>
      <div>
        {pointsWin !== 0 && <div>Points Win: {pointsWin}</div>}
        {pointsLose!== 0 && <div>Points Lose: {pointsLose}</div>}</div>
    </div>
  )
}

export default LevelSystem;