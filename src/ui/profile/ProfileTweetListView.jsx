import {getAllTweetsByUser} from "../../data/tweetRepo.js";
import {useLoaderData} from "react-router-dom";
import ProfileTweetListItemView from "./ProfileTweetListItemView.jsx";
import {decodeToken} from "../../data/authRepo.js";

export const profileTweetListLoader = async () => {
  const decodedToken = decodeToken(localStorage.getItem("token"));
  const tweetsResponse = await getAllTweetsByUser(decodedToken.id)
  const tweets = tweetsResponse.data
  return {tweets}
}

const ProfileTweetListView = () => {
  const {tweets} = useLoaderData()

  return (
    <div className={"flex flex-col flex-grow items-center"}>
      <div className={"flex flex-col gap-2 m-2 w-8/12"}>
        {tweets.map((tweet, index) => {
          return <ProfileTweetListItemView key={index} tweet={tweet}/>
        })}
      </div>
    </div>
  )
}

export default ProfileTweetListView