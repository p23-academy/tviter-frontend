import {Form, redirect, useLoaderData} from "react-router-dom";
import {getTweetById, postNewTweet, updateTweet} from "../../data/tweetRepo.js";
import Button from "../../components/buttons/Button.jsx";

export const editTweetFormLoader = async ({params}) => {
  const tweetId = params.tweetId
  const response = await getTweetById(tweetId)
  if (response.status === 200) {
    const tweet = response.data;
    return {tweet}
  } else {
    return redirect("/app/profile")
  }
}

export const editTweetFormAction = async ({request}) => {
  const formData = await request.formData();
  const tweet = formData.get("tweet");
  const tweetId = formData.get("id")
  const response = await updateTweet(tweetId, tweet)
  if (response.status === 200) {
    return redirect("/app/profile")
  }
}

const EditTweetFormView = () => {
  const {tweet} = useLoaderData()

  return (
    <div className={"flex justify-center flex-grow"}>
      <Form className={"flex flex-col gap-2 w-96 h-32"} method={"post"}>
        <input type={"hidden"} value={tweet._id} name={"id"} />
        <textarea className={"resize-none border border-black p-1"} name={"tweet"} defaultValue={tweet.tweet}/>
        <Button type={"submit"} text={"Snimi"} />
      </Form>
    </div>
  )
}

export default EditTweetFormView