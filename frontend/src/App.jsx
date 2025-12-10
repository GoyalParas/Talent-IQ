import {SignedIn, SignedOut, SignOutButton, SignInButton, UserButton} from '@clerk/clerk-react';
import { useUser } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";

import DashboardPage from "./Pages/DashboardPage";

// import ProblemPage from "./pages/ProblemPage";
import ProblemsPage from "./Pages/ProblemsPage";

function App() {

  const { isSignedIn, isLoaded } = useUser();

  // this will get rid of the flickering effect
  if (!isLoaded) return null;

  return (

    <Routes>
      <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
      <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />
      
      <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
      
    </Routes>
    
  )
}

export default App;
