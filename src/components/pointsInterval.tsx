export const pointInterval = (sState: React.Dispatch<React.SetStateAction<number>>): number => {
  console.log('Interval wurde gestartet');
  return setInterval(() => {
    sState((prevState: number) => {
      console.log(prevState);
      return prevState - 0.1;
    });

  }, 1000);  
}
