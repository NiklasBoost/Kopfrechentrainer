export function addPoints(
  displayState: React.Dispatch<React.SetStateAction<number>>,
  sState: React.Dispatch<React.SetStateAction<number>>, 
  numb: number) {
  // const displayNumb = numb;
  displayState(numb);
  sState(prevState => prevState+=numb);
}

export function removePoints(
  displayState: React.Dispatch<React.SetStateAction<number>>,
  sState: React.Dispatch<React.SetStateAction<number>>, 
  numb: number) {
  // const displayNumb = 0 - numb;
  displayState(numb);
  sState(prevState => prevState-=numb);
  
}
