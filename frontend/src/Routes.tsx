import { Route, Routes, } from "react-router-dom";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Home from "./page/Home";
import Redirect from "./components/Redirect";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Redirect/>}/>
        <Route path="/auth/signin" element={<SignIn/>}/>
        <Route path="/auth/signup" element={<SignUp/>}/>
        <Route path="/tasks" element={<Home/>}/>
      </Routes>
    </>
  )
}
