import { useLocation } from 'react-router-dom'
import './App.css'
import AppRouter from './AppRouter'
import Footer from './Components/Footer'
import Header from './Components/Header'


function App() {

  const location = useLocation()
  const hideLayout = location.pathname === "/"


  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {!hideLayout && <Header />}
      <div style={{ flexGrow: "1", marginBottom: "20px" }}>
        <AppRouter />
      </div>
      {!hideLayout && <Footer />}
    </div>
  )
}

export default App
