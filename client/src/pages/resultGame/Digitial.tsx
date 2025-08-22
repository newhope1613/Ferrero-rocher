import { useNavigate } from "react-router-dom";
import { END } from "../../utils/endPoints";
import { useEffect } from "react";

function Digitial() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(END);
    }, 2000);
  });

  return (
    <div className="center">
      <div>
        <h1>CONGRATULATIONS, YOU WON THE PRIZE!</h1>
        <h2>Promocode will be send to your phone</h2>
      </div>
    </div>
  );
}

export default Digitial;
