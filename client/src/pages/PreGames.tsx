import "../App.css"
import { useNavigate } from "react-router-dom"
import { GAME } from "../utils/endPoints"
import { useForm } from "react-hook-form"

type FormData = {
    email: string
}

function PreGame() {
    const { register, handleSubmit } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data);
        navigate(GAME)
    }
    const navigate = useNavigate()
    return (
        <div className="PreGamePage">
            <h1 className="center">Follow three steps for a chance to win</h1>
            <div className="preGameSpan">
                <img src="./imgForGame1.jpg" alt="Nothing" style={{ borderRadius: "100%" }} />
                <span>Enter your email</span>
                <img src="./imgForGame2.jpg" alt="Nothing" style={{ borderRadius: "100%" }} />
                <span>PLAY</span>
                <span>up to three times a day</span>
                <img src="./imgForGame3.jpg" alt="Nothing" style={{ borderRadius: "100%" }} />
                <span>See the result</span>
            </div>
            <h1 className="center">Please enter your email</h1>
            <h3 className="center">Only one step before you play</h3>
            <div className="preGameInput">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p style={{ marginBottom: "10px" }}>*Email</p>
                    <input {...register("email", { required: "Нужно согласиться с условиями" })} placeholder="Email" />
                    <button type="submit" className="usualButton" style={{ marginLeft: "15px" }}>Continue</button>
                </form>
            </div>
            <div className="center" style={{ padding: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div>
                        <input type="checkbox" required style={{ marginRight: "10px" }} />
                        <span style={{ marginRight: "10px" }}>I have read term&conditions</span>
                    </div>
                    <div>
                        <input type="checkbox" required style={{ marginRight: "10px" }} />
                        <span style={{ marginRight: "10px" }}>I have read privacy policy</span>
                    </div>
                    <div style={{ marginTop: "15px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
                        <p>*Required field</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreGame
