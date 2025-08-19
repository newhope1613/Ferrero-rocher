import './App.css'
import AppRouter from './AppRouter'
import Footer from './Components/Footer'

function App() {

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header style={{
        width: "100%",
        backgroundImage: "url('/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px"
      }}>
      </header>
      <div style={{ flexGrow: "1" }}>
        <AppRouter />
      </div>
      <Footer />
    </div>
  )
}

export default App
