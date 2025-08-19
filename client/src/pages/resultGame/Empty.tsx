function Empty() {
    return (
      <div className="emptyPage">
        <div className="center" style={{display: "flex", gap: "10px", flexDirection: "column"}}>
          <h1>Sorry you didn`t win this time</h1>
          <h3>Now you can try again!</h3>
          <h3>Watch this video for another chance to win</h3>
          <div>
          <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/tstCrUdjk4U" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
          </div>
          <h4>You can play up to 3 times in 24 hours!</h4>
        </div>
      </div>
    )
  }
  
  export default Empty
  