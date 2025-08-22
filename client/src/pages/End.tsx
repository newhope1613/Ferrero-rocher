import { useNavigate } from "react-router-dom";

const Banner = () => {
  return (
    <div className="wrappedBanner">
      <img
        src="/ferreroTree.jpg"
        alt="Nothing"
        style={{ borderRadius: "30%" }}
        className="bannerImg"
      />
      <h1 className="bannerText">Thank you for game</h1>
    </div>
  );
};

export default Banner;
