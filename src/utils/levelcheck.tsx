export function levelcheck(
  ep: number,
  level: React.Dispatch<React.SetStateAction<string>>,
  levelNumber: React.Dispatch<React.SetStateAction<number>>) {

  if (ep > 900) {
    level('hard');
    levelNumber(3);
  } else if (ep > 600) {
    level('middle');
    levelNumber(2);
  } else if (ep > 300) {
    level('easy');
    levelNumber(1);
  } else {
    level('superEasy');
    levelNumber(0);
  }
}
