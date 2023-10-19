import { points } from '/scripts/point-system.js'

// let currentLevel = 'superEasy';
// let currentLevelNumber = 1;

// export const levelInterval = () => {
//   displayLevel();
//   setInterval(() => {
//     if(currentLevel === 'superEasy') {
//       levelcheck(points, 500, 'easy');
//     }
//   }, 1000)
// } 


// function levelcheck(ep, need, nextLevel) {
//   if (ep > need) {
//     console.log(`You are on level ${nextLevel} now!`);
//     currentLevel = nextLevel;
//     currentLevelNumber++;
//     displayLevel();
//   } 
// }

// function displayLevel() {
//   const levelcontainer = document.querySelector('.your-level-js');
//   levelcontainer.innerHTML = `Level ${currentLevelNumber} - ${currentLevel}`;
// }