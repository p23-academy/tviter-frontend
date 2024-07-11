import Button from "../../components/buttons/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import SearchView from "../../components/search/SearchView.jsx";

const AppLayoutTopbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/")
  }

  return (
    <div className={"w-full h-12 p-2 bg-orange-300 grid grid-cols-3 items-center border-b border-black"}>
      <div className={"flex"}>
        <Link to={"/app/feed"}>
          <h1 className={"text-lg font-bold"}>Tviter</h1>
        </Link>
      </div>
      <div className={"flex justify-center"}>
        <SearchView/>
      </div>
      <div className={"flex justify-end gap-2"}>
        <Button onClick={() => navigate("/app/profile")} text={"Profil"} size={"md"}/>
        <Button onClick={() => navigate("/app/new")} text={"Tvitaj"} size={"md"}/>
        <Button onClick={logout} text={"Logout"} size={"md"} className={"bg-red-500"}/>
      </div>
    </div>
  )
}

export default AppLayoutTopbar