import {useLoaderData} from "react-router-dom";
import SearchListItemView from "./SearchListItemView.jsx";
import {searchUsersByUsername} from "../../data/userRepo.js";

export const searchListViewLoader = async ({params}) => {
  const searchQuery = params.query
  const usersResponse = await searchUsersByUsername(searchQuery)
  const users = usersResponse.data
  return {users}
}

const SearchListView = () => {
  const {users} = useLoaderData()

  return (
    <div className={"flex flex-col flex-grow items-center"}>
      <div className={"flex flex-col gap-2 m-2 w-8/12"}>
        {users.map((user, index) => {
          return <SearchListItemView key={index} user={user}/>
        })}
      </div>
    </div>
  )
}

export default SearchListView