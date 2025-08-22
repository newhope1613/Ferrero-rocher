import { useNavigate } from "react-router-dom";
import { MAIN_PAGE } from "../utils/endPoints";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="wrappedBanner">
      <h1 className="bannerText">Add your golden touch</h1>
      <img
        src="/ferreroTree.jpg"
        alt="Nothing"
        style={{ borderRadius: "30%" }}
        className="bannerImg"
      />
      <div className="bannerP">
        <p>FERRERO ROCHER</p>
        <p>GLOBAL BRAND ACTIVATION</p>
        <p>Y25/26 Activation in CA&C</p>
      </div>
      <button className="bannerButton" onClick={() => navigate(MAIN_PAGE)}>
        Start
      </button>
    </div>
  );
};

export default Banner;
