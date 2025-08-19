function Again() {
    return (
      <div className="center">
        <h1>We are sorry <br /> you didn`t win today</h1>
        <div style={{marginTop: "30px"}}>
            <h2>But why not try again tomorrow? <br /> Amazing prizes await you </h2>
        </div>
        <div style={{marginTop: "30px", marginBottom: "10px"}}>
            <p style={{marginBottom: "10px"}}>Play again in</p>
            <img 
                src="/ferreroTree.jpg" 
                alt="Nothing" 
                style={{
                    width: "30%",
                    borderRadius: "20%",
                }}
                />
        </div>
        <button>Invite others to play</button>
      </div>
    )
  }
  
  export default Again
  