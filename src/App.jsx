import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { setCredentialsSlice } from "./store/slices/credentials.slice";
import { useDispatch } from "react-redux";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import TrackPage from "./pages/TrackPage";
import ArtistPage from "./pages/ArtistPage";
import PlaylistPage from "./pages/PlaylistPage";



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    const email = localStorage.getItem("email")
    const obj = {token, username, email}
    dispatch(setCredentialsSlice(obj))
  }, [])

  return (
      <div>
        <h1><span>Gift Music</span></h1>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoutes/>} >
        <Route path="/" element={<HomePage />} />
        <Route path="/tracks/:id" element={<TrackPage/>} />
        <Route path="/artist/:id" element={<ArtistPage/>} />
        <Route path="/playlist" element={<PlaylistPage/>} />
        </Route>
      </Routes>
      </div>
  )
}

export default App
