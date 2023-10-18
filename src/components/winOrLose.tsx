export function addPoints(
  sState: React.Dispatch<React.SetStateAction<number>>, 
  numb: number) {
  // const displayNumb = numb;

  sState(prevState => prevState+=numb);
}

export function removePoints(
  sState: React.Dispatch<React.SetStateAction<number>>, 
  numb: number) {
  // const displayNumb = 0 - numb;
  
  sState(prevState => prevState-=numb);
  
}
