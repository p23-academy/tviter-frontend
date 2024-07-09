import {Form, redirect, useActionData} from "react-router-dom";
import TextInput from "../../components/forms/TextInput.jsx";
import Button from "../../components/buttons/Button.jsx";
import {registerUser} from "../../data/authRepo.js";

export const registerUserAction = async ({request}) => {
  const formData = await request.formData()
  const email = formData.get("email")
  const username = formData.get("username")
  const password = formData.get("password")
  const registrationResponse = await registerUser(email, username, password)
  if (registrationResponse.status === 200) {
    const token = registrationResponse.data
    localStorage.setItem("token", token)
    return redirect("/app/profile")
  } else {
    const error = registrationResponse.data.message
    return {error}
  }
}

const RegisterView = () => {
  const actionData = useActionData()

  return (
    <div className={"h-screen w-screen flex justify-center items-center bg-orange-50"}>
      <div className={"flex flex-col p-2 gap-2 bg-white w-64 justify-center items-center rounded-xl"}>
        <h1 className={"text-2xl font-bold"}>Registracija</h1>
        <Form className={"flex flex-col gap-2"} method={"post"}>
          <TextInput required={true} label={"Email"} name={"email"} type={"email"}/>
          <TextInput required={true} label={"Korisničko ime"} name={"username"}/>
          <TextInput required={true} label={"Šifra"} name={"password"} type={"password"}/>
          {/*<TextInput required={true} label={"Ponovi šifru"} name={"password"} type={"password"}/>*/}
          {actionData && <p className={"text-red-500 text-lg"}>{actionData.error}</p>}
          <Button type={"submit"} text={"Registriraj"}/>
        </Form>
      </div>
    </div>
  )
}

export default RegisterView