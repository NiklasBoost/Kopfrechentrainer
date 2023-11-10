import { BreakButton } from "./components/breakbutton";
import Exercises from "./components/exercises"
import LevelSystem from "./components/levels"
import LevelUpAnimation from "./components/animations";
import { useState, useEffect } from "react";

const App = () => {

  const [points, setPoints] = useState<number>(0);
  const [pointsWin, setPointsWin] = useState(0);
  const [pointsLose, setPointsLose] = useState(0);
  const [currentLevel, setCurrentLevel] = useState('superEasy');
  const [levelNumber, setLevelNumber] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setPointsWin(0);
      setPointsLose(0);
    }, 1500)
  }, [pointsWin, pointsLose]);

  // useEffect(() => {
  //   console.log(points)
  // })

  return (
    <>
      <div className="row">
        <div className="col mt-2 ms-1">
          <BreakButton 
            isPaused={isPaused}
            setIsPaused={setIsPaused}
          />
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col mt-2 me-1">
          <LevelSystem 
            points={points}
            setPoints={setPoints}
            pointsWin={pointsWin}
            pointsLose={pointsLose}
            setPointsWin={setPointsWin}
            setPointsLose={setPointsLose}
            currentLevel={currentLevel}
            levelNumber={levelNumber}
            setLevelNumber={setLevelNumber}
            setCurrentLevel={setCurrentLevel}
            isPaused={isPaused}
          />  
        </div>
      </div>
      <div className="row mt-5"></div>
      <div className="row mt-5">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <LevelUpAnimation
            currentLevel={currentLevel}
            levelNumber={levelNumber}
          />
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row mt-5"></div>
      <div className="row mt-4">
        <div className="col"></div>
        <div className="col">
          <Exercises 
            points={points}
            setPoints={setPoints}
            pointsWin={pointsWin}
            pointsLose={pointsLose}
            setPointsWin={setPointsWin}
            setPointsLose={setPointsLose}
            currentLevel={currentLevel}
            isPaused={isPaused}
          />
        </div>
        <div className="col"></div>
      </div>
    </>

  )
}

export default App;
