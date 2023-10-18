import { useState, useEffect } from "react";
import { pointInterval } from "./pointsInterval";
import { LevelSystemTypes } from "../types/levelsTypes";

const LevelSystem = ({ 
  points, 
  setPoints,
  pointsWin, 
  pointsLose, 
  setPointsWin, 
  setPointsLose }: LevelSystemTypes) => {
 

  useEffect(() => {
    console.log('useEffect fürs Intervall');
    pointInterval(setPoints);

  }, [])


  return (
    <div className="level-system">
      <div className="your-level your-level-js"></div>
      <div>Your Points: {Math.round(points)}</div>
      <div className="your-points-add-remove-js"></div>
    </div>
  )
}

export default LevelSystem;