import axios from "axios";
import {decodeToken} from "./authRepo.js";

export const getUserById = async (userId) => {
  try {
    console.log(`Getting user ${userId}`)
    const response = await axios.get(`http://localhost:3000/api/users/${userId}`)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export const followUser = async (userId) => {
  try {
    console.log(`Following user ${userId}`)
    const decodedToken = decodeToken(localStorage.getItem("token"))
    const loggedUserId = decodedToken.id
    const followsBody = {
      follower: loggedUserId,
      following: userId,
      time: new Date(),
    }
    const response = await axios.post("http://localhost:3000/api/follows", followsBody)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export const unfollowUser = async (userId) => {
  try {
    console.log(`Unfollowing user ${userId}`)
    const decodedToken = decodeToken(localStorage.getItem("token"))
    const loggedUserId = decodedToken.id
    const followsBody = {
      follower: loggedUserId,
      following: userId,
    }
    const response = await axios.delete("http://localhost:3000/api/follows", {
      data: followsBody
    })
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export const isFollowingUser = async (userId) => {
  try {
    console.log(`Checking is following user ${userId}`)
    const decodedToken = decodeToken(localStorage.getItem("token"))
    const loggedUserId = decodedToken.id
    const response = await axios.get(`http://localhost:3000/api/follows/${loggedUserId}/${userId}`)
    console.log(response)
    return response.data.length !== 0
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export const searchUsersByUsername = async (username) => {
  try {
    console.log(`Searching for users with ${username}`)
    const searchBody = {
      username: username
    }
    const response = await axios.post(`http://localhost:3000/api/search`, searchBody)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}