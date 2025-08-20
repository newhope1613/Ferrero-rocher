import { useNavigate } from "react-router-dom"
import { MAIN_PAGE } from "../../utils/endPoints"

function Digitial() {
  const navigate = useNavigate()

  return (
    <div className="center">
      <div>
        <h1>CONGRATULATIONS, YOU WON THE PRIZE!</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h3>Here is your prize</h3>
      </div>
      <div style={{ marginTop: "100px" }}>
        <span className="promocode">Promocode</span>
      </div>
      <button className="winButton" style={{ marginTop: "100px" }} onClick={() => navigate(MAIN_PAGE)}>Go to main</button>
    </div>
  )
}

export default Digitial
