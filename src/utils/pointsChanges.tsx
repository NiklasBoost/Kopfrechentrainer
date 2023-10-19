export function addPoints(
  displayState: React.Dispatch<React.SetStateAction<number>>,
  sState: React.Dispatch<React.SetStateAction<number>>, 
  numb: number) {

  displayState(numb);
  sState(prevState => prevState+=numb);
}

export function removePoints(
  displayState: React.Dispatch<React.SetStateAction<number>>,
  sState: React.Dispatch<React.SetStateAction<number>>, 
  numb: number) {
  
  displayState(numb);
  sState(prevState => prevState-=numb);
  
}
