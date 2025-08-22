import { useForm } from "react-hook-form";
import { END } from "../../utils/endPoints";
import { useNavigate } from "react-router-dom";
import api from "../../http/api";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

type deliveryAddress = {
  email?: string;
  address: string;
  phone: string;
  name: string;
};

function Prize() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<deliveryAddress>();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      const decoded = jwtDecode<{ id: number; email: string }>(token);
      console.log(decoded.email);
      setEmail(decoded.email);
    }
  });

  const onSubmit = async (data: deliveryAddress) => {
    const { name, address, phone } = data;
    if (!name) {
      alert("Все поля лбязательны");
      return;
    }
    if (!address) {
      alert("Все поля лбязательны");
      return;
    }
    if (!phone) {
      alert("Все поля лбязательны");
      return;
    }
    try {
      await api.post("game/physical", {
        email,
        name,
        address,
        phone,
      });
      navigate(END);
    } catch (e) {
      console.error(e);
    }
  };

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
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label htmlFor="address">*Address</label>
              <input
                id="address"
                {...register("address")}
                placeholder="Address"
              />
              {errors.address && <span>*field address must be filled</span>}
              <label htmlFor="phone">*Phone</label>
              <input id="phone" {...register("phone")} placeholder="Phone" />
              {errors.phone && <span>*field phone must be filled</span>}
              <label htmlFor="fullName">*Full name</label>
              <input id="name" {...register("name")} placeholder="Full name" />
              {errors.name && <span>*field name must be filled</span>}
              <button className="winButton" style={{ marginTop: "30px" }}>
                Submit (the message will be sent to your email )
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Prize;
