import {Link} from "react-router-dom";

const SearchListItemView = ({user}) => {
  return (
    <div className={"w-full flex gap-2 items-center bg-orange-200 p-2 rounded-xl"}>
      <img
        className={"rounded-full w-16 h-16 border border-black"}
        src={"https://media.istockphoto.com/id/93153028/photo/straight-from-the-horses-mouth.jpg?s=612x612&w=0&k=20&c=OBTLIlgxKDqrPnjy3O9DH6NDx8b7nNTiBo1m8F5ly90="}/>
      <Link to={`/app/users/${user._id}`}>
        <p className={"text-xl text-blue-600 font-bold"}>{user.username}</p>
      </Link>
    </div>
  )
}

export default SearchListItemView