import { useEffect, useState } from "react"

const Streaks = ({ pointsWin, pointsLose}: { pointsWin: Number, pointsLose: Number}) => {
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  useEffect(() => {
    if(pointsWin !== 0) {
      setStreak(prevSt => prevSt + 1)
    }
  }, [pointsWin])

  useEffect(() => {
    if(streak > bestStreak) {
      setBestStreak(streak);
    }
    setStreak(0);
  }, [pointsLose])




  return (
    <>
      <div>Aktuelle Streak: {streak}</div>
      <div>Rekord: {bestStreak}</div>
    </>
  )
}

export default Streaks;