import {getAllTweetsByUser} from "../../data/tweetRepo.js";
import {Link, useLoaderData} from "react-router-dom";
import UserTweetListItemView from "./UserTweetListItemView.jsx";

export const userTweetListLoader = async ({params}) => {
  const userId = params.userId
  const tweetsResponse = await getAllTweetsByUser(userId)
  const tweets = tweetsResponse.data
  return {tweets, userId}
}

const UserTweetListView = () => {
  const {tweets, userId} = useLoaderData()

  return (
    <div className={"flex flex-col flex-grow items-center"}>
      <div className={"flex flex-col items-center gap-2 p-2 border-b"}>
        <h2 className={"text-2xl font-bold"}>{userId}</h2>
        <img
          className={"rounded-full w-20 h-20 border border-black"}
          src={"https://media.istockphoto.com/id/93153028/photo/straight-from-the-horses-mouth.jpg?s=612x612&w=0&k=20&c=OBTLIlgxKDqrPnjy3O9DH6NDx8b7nNTiBo1m8F5ly90="}/>
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