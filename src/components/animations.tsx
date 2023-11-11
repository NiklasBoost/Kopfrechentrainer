import { useEffect, useState } from "react";

const LevelUpAnimation = ({currentLevel, currentLevelNumber}: {currentLevel: string, currentLevelNumber: number}) => {
  const[activeAnimation, setActiveAnimation] = useState(false)
  const[prevLevelNumber, setprevLevelNumber] = useState(0);

  useEffect(() => {
    
    if(currentLevel != 'superEasy' && levelUpCheck(currentLevelNumber, prevLevelNumber)) {
      setprevLevelNumber(currentLevelNumber - 1);
      setActiveAnimation(true)
      setTimeout(() => {
        setActiveAnimation(false)
      }, 5000)
    }
  }, [currentLevel])


  return <h1 className={activeAnimation ? 'level-up': 'level-not'}>LEVEL UP!</h1>
}

function levelUpCheck(num: number, prevNum: number) {
  if(num > prevNum) {
    return true;
  }
}



export default LevelUpAnimation;