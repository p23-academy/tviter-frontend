import Button from "../../components/buttons/Button.jsx";
import {Link, useNavigate} from "react-router-dom";

const AppLayoutTopbar = () => {
  const navigate = useNavigate();

  return (
    <div className={"w-full h-12 p-2 bg-orange-300 flex justify-between items-center border-b border-black"}>
      <div className={"flex"}>
        <Link to={"/app/feed"}>
          <h1 className={"text-lg font-bold"}>Tviter</h1>
        </Link>
      </div>
      <div className={"flex gap-2"}>
        <Button onClick={() => navigate("/app/profile")} text={"Profil"} size={"md"}/>
        <Button onClick={() => navigate("/app/new")} text={"Tvitaj"} size={"md"}/>
      </div>
    </div>
  )
}

export default AppLayoutTopbar