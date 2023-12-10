import { useEffect, useState } from "react"

const Streaks = ({pointsWin, pointsLose}: {pointsWin: Number, pointsLose: Number}) => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if(pointsWin !== 0) {
      setStreak(prevSt => prevSt + 1)
    }
  }, [pointsWin])

  useEffect(() => {
    setStreak(0)
  }, [pointsLose])


  return (
    <>
      <div>Aktuelle Streak: {streak}</div>
    </>
  )
}

export default Streaks;