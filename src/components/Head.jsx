const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="Hamburger Menu"
        />
        <img
          className="h-8 mx-2"
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt="Youtube Logo "
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 p-2 border border-gray-400 rounded-l-full"
          type="text"
        />
        <button className="px-5 py-2 bg-gray-100 border border-gray-400 rounded-r-full">
          🔍
        </button>
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
