import axios from "axios";
import {decodeToken} from "./authRepo.js";

export const getAllTweets = async () => {
  console.log("Getting all tweets")
  const response = await axios.get("http://localhost:3000/api/tweets")
  console.log(response)
  return response
}

export const postNewTweet = async (tweet) => {
  console.log("Posting new tweet")
  const decodedToken = decodeToken(localStorage.getItem("token"))
  const tweetBody = {
    author: decodedToken.username,
    authorId: decodedToken.id,
    tweet: tweet,
    time: new Date(),
  }
  const response = await axios.post("http://localhost:3000/api/tweets", tweetBody)
  console.log(response)
  return response
}

export const getTweetById = async (tweetId) => {
  console.log(`Getting tweet ${tweetId}`)
  const response = await axios.get(`http://localhost:3000/api/tweets/${tweetId}`)
  console.log(response)
  return response
}

export const updateTweet = async (tweetId, tweet) => {
  console.log(`Updating tweet ${tweetId} with ${tweet}`)
  const updateTweetBody = {
    tweet: tweet,
  }
  const response = await axios.post(`http://localhost:3000/api/tweets/${tweetId}`, updateTweetBody)
  console.log(response)
  return response
}

export const getAllTweetsByUser = async (userId) => {
  console.log(`Getting all tweets by ${userId}`)
  const response = await axios.get(`http://localhost:3000/api/users/${userId}/tweets`)
  console.log(response)
  return response
}

export const deleteTweet = async (tweetId) => {
  console.log(`Deleting tweet ${tweetId}`)
  const deleteTweetBody = {
    id: tweetId
  }
  const response = await axios.delete("http://localhost:3000/api/tweets", {
    data: deleteTweetBody
  })
  console.log(response)
  return response
}