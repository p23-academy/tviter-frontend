import {Form} from "react-router-dom";
import TextInput from "../../components/forms/TextInput.jsx";
import Button from "../../components/buttons/Button.jsx";

const RegisterView = () => {
  return (
    <div className={"h-screen w-screen flex justify-center items-center bg-orange-50"}>
      <div className={"flex flex-col p-2 gap-2 bg-white w-64 justify-center items-center rounded-xl"}>
        <h1 className={"text-2xl font-bold"}>Registracija</h1>
        <Form className={"flex flex-col gap-2"}>
          <TextInput required={true} label={"Korisničko ime"} name={"login"}/>
          <TextInput required={true} label={"Šifra"} name={"password"} type={"password"}/>
          <TextInput required={true} label={"Ponovi šifru"} name={"password"} type={"password"}/>
          <Button type={"submit"} text={"Registriraj"}/>
        </Form>
      </div>
    </div>
  )
}

export default RegisterView