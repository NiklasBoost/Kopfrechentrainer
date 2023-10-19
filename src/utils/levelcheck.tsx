export function levelcheck(
  ep: number,
  level: React.Dispatch<React.SetStateAction<string>>,
  levelNumber: React.Dispatch<React.SetStateAction<number>>) {
  if (ep > 1200) {
    level('ultraKrass');
    levelNumber(4);
  } else if (ep > 900) {
    level('schwer');
    levelNumber(3);
  } else if (ep > 600) {
    level('mittel');
    levelNumber(2);
  } else if (ep > 300) {
    level('easy');
    levelNumber(1);
  } else {
    level('superEasy');
    levelNumber(0);
  }
}
