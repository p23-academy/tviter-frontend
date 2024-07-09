import {Form, redirect, useActionData} from "react-router-dom";
import TextInput from "../../components/forms/TextInput.jsx";
import Button from "../../components/buttons/Button.jsx";
import {loginUser} from "../../data/authRepo.js";

export const loginUserAction = async ({request}) => {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const loginResponse = await loginUser(email, password)
  if (loginResponse.status === 200) {
    const token = loginResponse.data
    localStorage.setItem("token", token)
    return redirect("/app/profile")
  } else {
    const error = loginResponse.data.message
    return {error}
  }
}

const LoginView = () => {
  const actionData = useActionData()

  return (
    <div className={"h-screen w-screen flex justify-center items-center bg-orange-50"}>
      <div className={"flex flex-col p-2 gap-2 bg-white w-64 justify-center items-center rounded-xl"}>
        <h1 className={"text-2xl font-bold"}>Login</h1>
        <Form className={"flex flex-col gap-2"} method={"post"}>
          <TextInput required={true} label={"Email"} name={"email"} type={"email"}/>
          <TextInput required={true} label={"Šifra"} name={"password"} type={"password"}/>
          {actionData && <p className={"text-red-500 text-lg"}>{actionData.error}</p>}
          <Button type={"submit"} text={"Login"}/>
        </Form>
      </div>
    </div>
  )
}

export default LoginView