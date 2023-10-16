import Exercises from "./components/exercises"
import LevelSystem from "./components/levels"


const App = () => {
  return (
    <>
      <h1>
        Willkommen!
      </h1>
      <h3>
        Ich bin dein kleines Programm, um deine Kopfrechenskills zu trainieren
      </h3>
      <Exercises />
      <LevelSystem />
    </>

  )
}

export default App;
