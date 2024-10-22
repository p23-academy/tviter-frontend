const UserTweetListItemView = ({tweet}) => {
  return (
    <div className={"w-full flex flex-col bg-orange-200 p-2 rounded-xl"}>
      <div className={"flex justify-between"}>
        <p className={"text-md font-bold"}>{tweet.author}</p>
        <p className={"text-md font-light"}>{new Date(tweet.time)?.toLocaleString()}</p>
      </div>
      <p className={"text-lg whitespace-pre"}>{tweet.tweet}</p>
    </div>
  )
}

export default UserTweetListItemView