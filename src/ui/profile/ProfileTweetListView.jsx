import {getAllTweetsByUser} from "../../data/tweetRepo.js";
import {useLoaderData} from "react-router-dom";
import ProfileTweetListItemView from "./ProfileTweetListItemView.jsx";

export const profileTweetListLoader = async () => {
  const tweetsResponse = await getAllTweetsByUser("Konj")
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