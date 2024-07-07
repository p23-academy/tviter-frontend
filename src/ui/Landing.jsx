import Button from "../components/buttons/Button.jsx";
import {useNavigate} from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className={"h-screen w-screen flex flex-col justify-center items-center bg-orange-200"}>
      <img src={"https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png"} width={200} height={200}/>
      <h1 className={"text-6xl font-bold mb-5"}>Tviter</h1>
      <div className={"flex gap-2"}>
        <Button onClick={() => navigate("/login")} text={"Login"}/>
        <Button onClick={() => navigate("/register")} text={"Registracija"}/>
      </div>
    </div>
  )
}

export default Landing
