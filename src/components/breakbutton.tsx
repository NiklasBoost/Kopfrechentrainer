

export const BreakButton = ({isPaused, setIsPaused}) => {
  

  return (
    <>
      {isPaused ? (
        <button 
          style={{
            height: '50px', 
            width: '50px'
          }}
          className="btn"
          onClick={() => setIsPaused(false)}
        >
          <img 
            src="public/icons/play-button.png" 
            className="img-fluid" 
            alt="play-icon" 
          />
        </button>
      ):(
        <button 
          style={{
            height: '50px', 
            width: '50px'
          }}
          className="btn"
          onClick={() => setIsPaused(true)}
        >
          <img 
            src="public/icons/pause.png" 
            className="img-fluid" 
            alt="pause-icon" 
          />

        </button>
      )}
    </>
  )
}