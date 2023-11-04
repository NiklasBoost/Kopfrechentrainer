let pointsTimer = 0;
let earnedPointsInterval: ReturnType<typeof setTimeout> | undefined;
let pointloseInterval: ReturnType<typeof setTimeout> | undefined;
export const earnedPointsTimer = () => {
  stopInterval('earnedPointsInterval');
  pointsTimer = 0;
  earnedPointsInterval = setInterval(() => {
    pointsTimer++;
    // console.log(pointsTimer);
  }, 1000)
} 

export function pointInterval (sState: React.Dispatch<React.SetStateAction<number>>): number {
  console.log('Interval wurde gestartet');
  return pointloseInterval = setInterval(() => {
    sState((prevState: number) => {
      // console.log(prevState);
      return prevState - 0.1;
    });

  }, 1000);  
}


export function stopInterval(interv) {
  if(interv === 'earnedPointsInterval') {
    if(earnedPointsInterval) {
      clearInterval(earnedPointsInterval);
    }
  }
  if(interv === 'pointloseInterval') {
    if(pointloseInterval) {
      console.log('Interval gestoppt!');
      clearInterval(pointloseInterval);
    }
  }
}

export function mathEarndedPoints() {
  console.log(pointsTimer);
  let yourPoints = 50;
  // if (pointsTimer > 50) {
  //   yourPoints = 0;
  // }
  yourPoints = yourPoints - pointsTimer;
  console.log('Du hast dir ' + yourPoints + ' dazuverdient');
  return yourPoints;
}