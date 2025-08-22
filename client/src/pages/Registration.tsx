import { useForm } from "react-hook-form";

type FormValues = {
  receiptNumber: string;
};

function Registration() {
  const { register } = useForm<FormValues>();

  return (
    <div className="center">
      <h1>Upload your receipt</h1>
      <p style={{ fontSize: "1.3rem" }}>Upload a photo</p>
      <input type="file" className="check" />
      <div className="preGameInput">
        <form>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <label htmlFor="receiptNumber">*Address</label>
            <input
              id="receiptNumber"
              {...register("receiptNumber")}
              placeholder="Address"
            />
            <button className="usualButton" style={{ marginTop: "30px" }}>
              Submit (the message will be sent to your email )
            </button>
          </div>
        </form>
        <p>*Required field</p>
      </div>
    </div>
  );
}

export default Registration;
