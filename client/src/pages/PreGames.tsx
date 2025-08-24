import "../App.css";
import { useNavigate } from "react-router-dom";
import { GAME } from "../utils/endPoints";
import { useForm } from "react-hook-form";
import api from "../http/api";

type FormData = {
  email: string;
  password: string;
  agreeTerms: boolean;
  agreePrivacy: boolean;
  action: "registration" | "login";
};

function PreGame() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onRegister = async (data: FormData) => {
    const { email, password } = data;
    try {
      const register = await api.post("users/registration", {
        email,
        password,
      });
      console.log(register);

      const { token } = register.data;
      localStorage.setItem("user", token);
      navigate(GAME);
      alert("Вы прошли регистрацию");
    } catch (e) {
      console.error(e);
    }
  };

  const onLogin = async (data: FormData) => {
    const { email, password } = data;
    try {
      const login = await api.post("users/login", {
        email,
        password,
      });
      const { token } = login.data;
      localStorage.setItem("user", token);
      navigate(GAME);
    } catch (e) {
      console.error(e);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="PreGamePage">
      <h1 className="center">Follow three steps for a chance to win</h1>
      <div className="preGameSpan">
        <img
          src="./imgForGame1.jpg"
          alt="Nothing"
          style={{ borderRadius: "100%" }}
        />
        <span>Enter your email</span>
        <img
          src="./imgForGame2.jpg"
          alt="Nothing"
          style={{ borderRadius: "100%" }}
        />
        <span>PLAY</span>
        <span>up to three times a day</span>
        <img
          src="./imgForGame3.jpg"
          alt="Nothing"
          style={{ borderRadius: "100%" }}
        />
        <span>See the result</span>
      </div>
      <h1 className="center">Please registration to play a game</h1>
      <h3 className="center">Only one step before you play</h3>
      <div className="preGameInput">
        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              marginBottom: "15px",
            }}
          >
            <label htmlFor="email">*Email</label>
            <input
              id="email"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && <span>*field email is required</span>}
            <label htmlFor="password">*Password</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password && <span>*field password is required</span>}
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                type="button"
                className="usualButton"
                onClick={handleSubmit(onRegister)}
              >
                Registration
              </button>
              <button
                type="button"
                className="usualButton"
                onClick={handleSubmit(onLogin)}
              >
                Login
              </button>
            </div>
          </div>
          <div className="checkboxContainer">
            <label className="checkboxWrapper">
              <input
                type="checkbox"
                className="customCheckbox"
                {...register("agreeTerms", { required: true })}
              />
              <span className="checkboxLabel">
                I have read terms & conditions
              </span>
            </label>
            {errors.agreeTerms && (
              <span className="errorText">*you must accept the terms</span>
            )}

            <label className="checkboxWrapper">
              <input
                type="checkbox"
                className="customCheckbox"
                {...register("agreePrivacy", { required: true })}
              />
              <span className="checkboxLabel">I have read privacy policy</span>
            </label>
            {errors.agreePrivacy && (
              <span className="errorText">*you must accept the policy</span>
            )}
          </div>
        </form>
        <p style={{ marginBottom: "15px" }}>*Required field</p>
      </div>
    </div>
  );
}

export default PreGame;
