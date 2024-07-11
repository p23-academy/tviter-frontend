import {getAllTweetsByUser} from "../../data/tweetRepo.js";
import {redirect, useLoaderData} from "react-router-dom";
import UserTweetListItemView from "./UserTweetListItemView.jsx";
import {followUser, getUserById, isFollowingUser, unfollowUser} from "../../data/userRepo.js";
import Button from "../../components/buttons/Button.jsx";
import {decodeToken} from "../../data/authRepo.js";
import {useState} from "react";

export const userTweetListLoader = async ({params}) => {
  const userId = params.userId
  const decodedToken = decodeToken(localStorage.getItem("token"))
  if (userId === decodedToken.id) {
    return redirect("/app/profile")
  }
  const tweetsResponse = await getAllTweetsByUser(userId)
  const tweets = tweetsResponse.data
  const userResponse = await getUserById(userId)
  const user = userResponse.data
  const isFollowing = await isFollowingUser(userId)
  return {tweets, user, isFollowing}
}

const UserTweetListView = () => {
  const {tweets, user, isFollowing} = useLoaderData()

  const [following, setFollowing] = useState(isFollowing)

  const follow = async (userId) => {
    await followUser(userId)
    setFollowing(true)
  }

  const unfollow = async (userId) => {
    await unfollowUser(userId)
    setFollowing(false)
  }

  return (
    <div className={"flex flex-col flex-grow items-center"}>
      <div className={"flex flex-col items-center gap-2 p-2 border-b"}>
        <h2 className={"text-2xl font-bold"}>{user.username}</h2>
        <img
          className={"rounded-full w-20 h-20 border border-black"}
          src={"https://media.istockphoto.com/id/93153028/photo/straight-from-the-horses-mouth.jpg?s=612x612&w=0&k=20&c=OBTLIlgxKDqrPnjy3O9DH6NDx8b7nNTiBo1m8F5ly90="}/>
        {following ?
          <Button onClick={() => unfollow(user._id)} text={"Otprati"}/>
          :
          <Button onClick={() => follow(user._id)} text={"Zaprati"}/>
        }
      </div>
      <div className={"flex flex-col gap-2 m-2 w-8/12"}>
        {tweets.map((tweet, index) => {
          return <UserTweetListItemView key={index} tweet={tweet}/>
        })}
      </div>
    </div>
  )
}

export default UserTweetListView