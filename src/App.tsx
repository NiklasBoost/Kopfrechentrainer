import Exercises from "./components/exercises"
import LevelSystem from "./components/levels"
import { useState, useEffect } from "react";

const App = () => {

  const [points, setPoints] = useState<number>(0);
  const [pointsWin, setPointsWin] = useState(0);
  const [pointsLose, setPointsLose] = useState(0);
  const [currentLevel, setCurrentLevel] = useState('superEasy');
  
  useEffect(() => {
    setTimeout(() => {
      setPointsWin(0);
      setPointsLose(0);
    }, 1500)
  }, [pointsWin, pointsLose]);

  return (
    <>
      <div className="row">
        <div className="col"></div>
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
          setCurrentLevel={setCurrentLevel}
        />  
        </div>
      </div>
      <div className="row mt-5"></div>
      <div className="row mt-5"></div>
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
          />
        </div>
        <div className="col"></div>
      </div>
    </>

  )
}

export default App;
