export interface ExercisesTypes {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  pointsWin: number;
  setPointsWin: React.Dispatch<React.SetStateAction<number>>;
  pointsLose: number;
  setPointsLose: React.Dispatch<React.SetStateAction<number>>;
  currentLevel: string;
  isPaused: boolean, 
  isWinner: boolean,
  playAgain: () => void;
}