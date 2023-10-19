let pointsTimer = 0;
let earnedPointsInterval: ReturnType<typeof setTimeout> | undefined;
export const earnedPointsTimer = () => {
  pointsTimer = 0;
  earnedPointsInterval = setInterval(() => {
    pointsTimer++;
    console.log(pointsTimer);
  }, 1000)
} 

export function pointInterval (sState: React.Dispatch<React.SetStateAction<number>>): number {
  console.log('Interval wurde gestartet');
  return setInterval(() => {
    sState((prevState: number) => {
      return prevState - 0.1;
    });

  }, 1000);  
}


export function stopInterval() {
  clearInterval(earnedPointsInterval);
  console.log('Interval gestoppt!');
}

export function mathEarndedPoints() {
  console.log(pointsTimer);
  let yourPoints = 50;
  if (pointsTimer > 50) {
    yourPoints = 0;
  }
  yourPoints = yourPoints - pointsTimer;
  console.log('Du hast dir ' + yourPoints + ' dazuverdient');
  return yourPoints;
}