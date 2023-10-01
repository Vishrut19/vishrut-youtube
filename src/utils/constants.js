const GOOGLE_API_KEY = import.meta.env.VITE_APP_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?maxResults=48&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;
