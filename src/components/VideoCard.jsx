const VideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-5 shadow-lg w-72">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="Thumbnail of the Video"
      />
      <ul>
        <li className="py-2 font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
