import {deleteTweet} from "../../data/tweetRepo.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../components/buttons/Button.jsx";

const ProfileTweetListItemView = ({tweet}) => {
  const navigate = useNavigate()

  const [tweetState, setTweetState] = useState(tweet)

  const deleteTweetListItem = async (tweet) => {
    if (confirm(`Sigurno obrisat '${tweet.tweet}'`)) {
      const response = await deleteTweet(tweet._id)
      if (response.status === 200) {
        setTweetState(null)
      }
    }
  }

  if (tweetState == null) {
    return null
  }

  return (
    <div className={"w-full flex bg-orange-200 p-2 rounded-xl gap-2"}>
      <div className={"flex flex-col basis-full"}>
        <div className={"flex justify-between"}>
          <p className={"text-md font-bold"}>{tweetState.author}</p>
          <p className={"text-md font-light"}>{new Date(tweetState.time)?.toLocaleString()}</p>
        </div>
        <p className={"text-lg whitespace-pre"}>{tweetState.tweet}</p>
      </div>
      <div className={"flex gap-1"}>
        <Button text={"Minjaj"} onClick={() => navigate(`/app/edit/${tweet._id}`)} size={"sm"}/>
        <Button className={"!bg-red-400"} text={"Briši"} onClick={() => deleteTweetListItem(tweetState)} size={"sm"}/>
      </div>
    </div>
  )
}

export default ProfileTweetListItemView