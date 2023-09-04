let points423 = 1;

export const pointInterval = () => {
  setInterval(() => {
    points423-=0.1;
    console.log('Deine Punkte: ' + points423);
  }, 1000);  
}

export { points423 };