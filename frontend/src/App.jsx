import {SignedIn, SignedOut, SignOutButton, SignInButton, UserButton} from '@clerk/clerk-react';
import { useUser } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";

function App() {

  const { isSignedIn, isLoaded } = useUser();

  // this will get rid of the flickering effect
  if (!isLoaded) return null;

  return (

    <Routes>
      <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
      <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />
      
      <Route path="/about" element={ <AboutPage/> } />
      
    </Routes>
    
  )
}

export default App;
