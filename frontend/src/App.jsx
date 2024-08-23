import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"
import { useAuthContext } from "./hooks/useAuthContext"

function App() {

  const {user} = useAuthContext();


  return (
   <BrowserRouter>
   <Navbar/>
      <Routes>
          <Route 
          path="/"
          element={user? <Home/>:<Login/>}
          />

          <Route 
          path="/login"
          element={!user? <Login/>:<Home/>}
          />

          <Route 
          path="/signup"
          element={!user? <Signup/>: <Home/>}
          />

      </Routes>
   </BrowserRouter>
  )
}

export default App
