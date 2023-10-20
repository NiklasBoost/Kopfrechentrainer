// export let points = 0;
// let pointsTimer = 0;
// export let earnedPointsIntervalObj;
// export const earnedPointsInterval = () => {
//   pointsTimer = 0;
//   earnedPointsIntervalObj = setInterval(() => {
//     pointsTimer++;
    // console.log('INTERVAL FUNKT ' + pointsTimer);
  // }, 1000)

// } 

// export function stopInterval(interv) {
//   clearInterval(interv);
//   console.log('Interval gestoppt!');
// }

// export const pointInterval = () => {
//   setInterval(() => {
//     points-=0.1;
//     // console.log('Deine Punkte: ' + points);
//     displayPoints();
//   }, 1000);  
// }

// export function addPoints(numb) {
  // const displayNumb = numb;
  // displayPointsAdjust(displayNumb);
  // points+=numb;
  // console.log('Deine Punkte:' + points);
// }

// export function removePoints(numb) {
  // const displayNumb = 0 - numb;
  // displayPointsAdjust(displayNumb)
  // points-=numb;
  // console.log('Deine Punkte:' + points);
// }

// export const mathEarndedPoints = () => {
//   console.log(pointsTimer);
//   let yourPoints = 50;
//   yourPoints = yourPoints - pointsTimer;
//   console.log('Du hast dir ' + yourPoints + ' dazuverdient');
//   return yourPoints;
// }

// function displayPoints() {
//   const pointsContainer = document.querySelector('.your-points-js');
//   const roundPoints = Math.round(points);
//   pointsContainer.innerHTML = roundPoints + ' Punkte';
// }

// function displayPointsAdjust(numb) {
//   console.log('ADJUSTMENT ' + numb);
//   const adjustContainer = document.querySelector('.your-points-add-remove-js');
//   if (numb >= 0) {
//     adjustContainer.innerHTML = '+ ' + numb;
//   } else {
//     adjustContainer.innerHTML = numb;
//   }

//   setTimeout(() => {
//     adjustContainer.innerHTML = '';
//   }, 1000);
// }