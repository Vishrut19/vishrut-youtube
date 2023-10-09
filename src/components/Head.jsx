import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState(""); //Here we are taking search query input in a state.
  const [suggestions, setSuggestions] = useState([]); // Here we are storing suggestion result in a state.
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  /**
   *
   * searchCache = {
   *    "iphone" : ["iphone 11", "iphone 12", "iphone 13"],  -> The search results are going to look like this
   * }
   *
   * searchQuery = "iphone"
   *
   */

  useEffect(() => {
    //  API Call

    // Make an API Call after every key press
    // But if the difference between 2 API calls is less than 200ms
    // Then, Decline the API Call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer); //This is basically a cleanup function
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // Update cache
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="Hamburger Menu"
        />
        <img
          className="h-8 mx-2"
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt="Youtube Logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 p-2 px-5 border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-5 py-2 bg-gray-100 border border-gray-400 rounded-r-full">
            🔍
          </button>
        </div>
        {/* If search suggestion is true, then only show it or else hide it. */}
        {showSuggestions && (
          <div className="absolute  px-2 py-2 bg-white w-[30.5rem] shadow-lg rounded-lg border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li className="px-3 py-2 shadow-sm hover:bg-gray-100" key={s}>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
          alt="User Icon"
        />
      </div>
    </div>
  );
};

export default Head;
