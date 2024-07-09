import axios from "axios";
import {jwtDecode} from "jwt-decode"

export const registerUser = async (email, username, password) => {
  try {
    console.log("Creating new user")
    const userBody = {
      email,
      username,
      password,
    }
    const response = await axios.post("http://localhost:3000/api/register", userBody)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export const loginUser = async (email, password) => {
  try {
    console.log(`Logging in ${email}`)
    const userBody = {
      email,
      password,
    }
    const response = await axios.post("http://localhost:3000/api/login", userBody)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export const verifyToken = async (token) => {
  try {
    console.log(`Verifying token ${token}`)
    const tokenBody = {
      token,
    }
    const response = await axios.post("http://localhost:3000/api/verify", tokenBody)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export const decodeToken = (token) => {
  try {
    return jwtDecode(token)
  } catch (error) {
    console.log(error)
  }
}