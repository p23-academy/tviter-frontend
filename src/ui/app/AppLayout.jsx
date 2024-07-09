import AppLayoutTopbar from "./AppLayoutTopbar.jsx";
import {Outlet, redirect} from "react-router-dom";
import {verifyToken} from "../../data/authRepo.js";

export const appLoader = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login")
  }
  const tokenResponse = await verifyToken(token)
  if (tokenResponse.status !== 200) {
    localStorage.removeItem("token")
    return redirect("/login")
  }
  return null
}

const AppLayout = () => {
  return (
    <div className={"h-screen w-screen flex flex-col"}>
      <AppLayoutTopbar />
      <div className={"flex flex-grow bg-orange-50 p-2"}>
        <Outlet/>
      </div>
    </div>
  )
}

export default AppLayout