import { useLocation } from "react-router-dom";
import "./App.css";
import AppRouter from "./AppRouter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/" || location.pathname === "/end";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "5px",
      }}
    >
      {!hideLayout && <Header />}
      <div style={{ flexGrow: "1" }}>
        <AppRouter />
      </div>
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
