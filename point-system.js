let points = 0;
let pointsTimer = 0;
export let earnedPointsIntervalObj;
export const earnedPointsInterval = () => {
  pointsTimer = 0;
  earnedPointsIntervalObj = setInterval(() => {
    pointsTimer++;
    console.log('INTERVAL FUNKT ' + pointsTimer);
  }, 1000)
} 

export function stopInterval(interv) {
  clearInterval(interv);
  console.log('Interval gestoppt!');
}

export const pointInterval = () => {
  setInterval(() => {
    points-=0.1;
    // console.log('Deine Punkte: ' + points);
  }, 1000);  
}

export function addPoints(numb) {
  points+=numb;
  console.log('Deine Punkte:' + points);
}

export function removePoints(numb) {
  points-=numb;
  console.log('Deine Punkte:' + points);
}

export const mathEarndedPoints = () => {
  console.log(pointsTimer);
  let yourPoints = 50;
  yourPoints = yourPoints - pointsTimer;
  console.log('Du hast dir ' + yourPoints + ' dazuverdient');
  return yourPoints;
}
