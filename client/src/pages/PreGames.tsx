import "../App.css"
import { useNavigate } from "react-router-dom"
import { GAME } from "../utils/endPoints"
import { useForm } from "react-hook-form"

type FormData = {
    email: string
    phone: string
    password: string
    agreeTerms: boolean
    agreePrivacy: boolean

}

function PreGame() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        await api.post("useer/", {
            
        })
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
            <h1 className="center">Please registration to play a game</h1>
            <h3 className="center">Only one step before you play</h3>
            <div className="preGameInput">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                        <label htmlFor="email">*Email</label>
                        <input id="email" {...register("email", { required: true })} placeholder="Email" />
                        {errors.email && <span>*field email is required</span>}
                        <label htmlFor="password">*Password</label>
                        <input id="password" type="password" {...register("password", { required: true })} placeholder="Password" />
                        {errors.email && <span>*field email is required</span>}
                        <button type="submit" className="usualButton">Continue</button>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <label >
                            <input type="checkbox" {...register("agreeTerms", { required: true })} />
                            <span>I have read terms & conditions</span>
                        </label>
                        {errors.agreeTerms && <span>*you must accept the terms</span>}

                        <label>
                            <input type="checkbox" {...register("agreePrivacy", { required: true })} />
                            <span>I have read privacy policy</span>
                        </label>
                        {errors.agreePrivacy && <span>*you must accept the policy</span>}
                    </div>
                </form>
                <p style={{ marginBottom: "15px" }}>*Required field</p>
            </div>
        </div>
    )
}

export default PreGame
