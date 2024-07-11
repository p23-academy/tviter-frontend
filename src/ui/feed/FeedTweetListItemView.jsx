import {Link} from "react-router-dom";

const FeedTweetListItemView = ({tweet}) => {
  return (
    <div className={"w-full flex flex-col bg-orange-200 p-2 rounded-xl"}>
      <div className={"flex justify-between"}>
        <Link to={`/app/users/${tweet.authorId}`}>
          <p className={"text-md text-blue-600 font-bold"}>{tweet.author}</p>
        </Link>
        <p className={"text-md font-light"}>{new Date(tweet.time)?.toLocaleString()}</p>
      </div>
      <p className={"text-lg whitespace-pre"}>{tweet.tweet}</p>
    </div>
  )
}

export default FeedTweetListItemView