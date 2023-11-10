export function levelcheck(
  ep: number,
  level: string,
  setlevel: React.Dispatch<React.SetStateAction<string>>,
  levelNumber: React.Dispatch<React.SetStateAction<number>>) {

  if (ep > 900 && level != 'hard') {
   
    setlevel('hard');
    levelNumber(3);
  } 

  if (ep > 600 && ep < 900 && level != 'middle') {
  
    setlevel('middle');
    levelNumber(2);
  } 
   
  if (ep > 300 && ep < 600 && level != 'easy') {
   
    setlevel('easy');
    levelNumber(1);
  } 
  
  if(ep < 300 && level != 'superEasy'){
   
    setlevel('superEasy');
    levelNumber(0);
  }
}
