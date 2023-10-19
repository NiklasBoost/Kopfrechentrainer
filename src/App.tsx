import Exercises from "./components/exercises"
import LevelSystem from "./components/levels"
import { useState, useEffect } from "react";

const App = () => {

  const [points, setPoints] = useState<number>(0);
  const [pointsWin, setPointsWin] = useState(0);
  const [pointsLose, setPointsLose] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setPointsWin(0);
      setPointsLose(0);
    }, 1500)
  }, [pointsWin, pointsLose]);

  return (
    <>
      <h1>
        Willkommen!
      </h1>
      <h3>
        Ich bin dein kleines Programm, um deine Kopfrechenskills zu trainieren
      </h3>
      <Exercises 
        points={points}
        setPoints={setPoints}
        pointsWin={pointsWin}
        pointsLose={pointsLose}
        setPointsWin={setPointsWin}
        setPointsLose={setPointsLose}
      />
      <LevelSystem 
        points={points}
        setPoints={setPoints}
        pointsWin={pointsWin}
        pointsLose={pointsLose}
        setPointsWin={setPointsWin}
        setPointsLose={setPointsLose}
      />
    </>

  )
}

export default App;
