import {Form, redirect} from "react-router-dom";
import {postNewTweet} from "../../data/tweetRepo.js";
import Button from "../../components/buttons/Button.jsx";

export const newTweetFormAction = async ({request}) => {
  const formData = await request.formData();
  const tweet = formData.get("tweet");
  console.log(tweet)
  await postNewTweet(tweet)
  return redirect("/app/feed")
}

const NewTweetFormView = () => {
  return (
    <div className={"flex justify-center flex-grow"}>
      <Form className={"flex flex-col gap-2 w-96 h-32"} method={"post"}>
        <textarea className={"resize-none border border-black p-1"} name={"tweet"}/>
        <Button type={"submit"} text={"Piši"}/>
      </Form>
    </div>
  )
}

export default NewTweetFormView