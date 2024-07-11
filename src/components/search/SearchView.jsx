import {useState} from "react";
import Button from "../buttons/Button.jsx";
import {useNavigate} from "react-router-dom";

const SearchView = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  return (
    <div className={"flex items-center gap-2"}>
      <input
        className={"bg-orange-100 w-64 h-8 text-md rounded"}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button onClick={() => navigate(`/app/search/${searchText}`)} text={"🔎"} size={"sm"}/>
    </div>
  )
}

export default SearchView