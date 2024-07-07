import {getAllTweets} from "../../data/tweetRepo.js";
import {useLoaderData} from "react-router-dom";
import FeedTweetListItemView from "./FeedTweetListItemView.jsx";

export const feedTweetListLoader = async () => {
  const tweetsResponse = await getAllTweets()
  const tweets = tweetsResponse.data
  return {tweets}
}

const FeedTweetListView = () => {
  const {tweets} = useLoaderData()

  return (
    <div className={"flex flex-col flex-grow items-center"}>
      <div className={"flex flex-col gap-2 m-2 w-8/12"}>
        {tweets.map((tweet, index) => {
          return <FeedTweetListItemView key={index} tweet={tweet}/>
        })}
      </div>
    </div>
  )
}

export default FeedTweetListView