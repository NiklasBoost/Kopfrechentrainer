
export interface LevelSystemTypes {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  pointsWin: number;
  setPointsWin: React.Dispatch<React.SetStateAction<number>>;
  pointsLose: number;
  setPointsLose: React.Dispatch<React.SetStateAction<number>>;

  currentLevelNumber: number;
  setCurrentLevelNumber: React.Dispatch<React.SetStateAction<number>>;
  currentLevel: string;
  setCurrentLevel: React.Dispatch<React.SetStateAction<string>>;
  isPaused: boolean, 
}