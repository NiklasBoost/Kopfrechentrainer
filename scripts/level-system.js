import { points } from '/script/point-system.js'

let currentLevel = 'superEasy';

export const levelInterval = () => {
  setInterval(() => {
    if(currentLevel === 'superEasy') {
      levelcheck(points, 5000, 'easy');
    }
  }, 1000)
} 


function levelcheck(ep, need, nextLevel) {
  if (ep > need) {
    console.log(`You are on level ${nextLevel} now!`);
    currentLevel = nextLevel;
  } else {
    console.log('Still on same level');
  }
}