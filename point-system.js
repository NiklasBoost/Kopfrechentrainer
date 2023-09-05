let points = 0;

export const pointInterval = () => {
  setInterval(() => {
    points-=0.1;
    console.log('Deine Punkte: ' + points);
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

