import AppLayoutTopbar from "./AppLayoutTopbar.jsx";
import {Outlet, redirect} from "react-router-dom";

export const appLoader = ({request}) => {
  const url = request.url
  if (url.endsWith("app")) {
    return redirect("/app/feed")
  }
  return {}
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