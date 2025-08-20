import { useForm } from "react-hook-form"
import { MAIN_PAGE } from "../../utils/endPoints"
import { useNavigate } from "react-router-dom"

type deliveryAddress = {
  address: string
  email: string
  fullName: string
}

function Prize() {

  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<deliveryAddress>()

  const onSubmit = (data: deliveryAddress) => {
    console.log(data);
  }

  return (
    <div className="center">
      <div>
        <h1>CONGRATULATIONS, YOU WON THE PRIZE!</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h3>Here is your prize</h3>
      </div>
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ marginBottom: "20px" }}>Delivery address</h1>
        <div className="preGameInput">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <label htmlFor="address">*Address</label>
              <input id="address" {...register("address")} placeholder="Address" />
              <label htmlFor="email">*Email</label>
              <input id="email" {...register("email")} placeholder="Email" />
              <label htmlFor="fullName">*Full name</label>
              <input id="fullName" {...register("fullName")} placeholder="Full name" />
              <button className="winButton">Submit (the message will be sent to your email )</button>
            </div>
          </form>

        </div>
      </div>
      <button className="winButton" style={{ marginTop: "100px" }} onClick={() => navigate(MAIN_PAGE)}>Go to main</button>
    </div>
  )
}

export default Prize
