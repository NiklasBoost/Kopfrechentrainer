import { useEffect, useState } from "react";

const LevelUpAnimation = ({currentLevel, levelNumber}: {currentLevel: string, levelNumber: number}) => {
  const[activeAnimation, setActiveAnimation] = useState(false)
  const[prevLevelNumber, setprevLevelNumber] = useState(0);

  useEffect(() => {
    
    if(currentLevel != 'superEasy' && levelUpCheck(levelNumber, prevLevelNumber)) {
      setprevLevelNumber(levelNumber - 1);
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