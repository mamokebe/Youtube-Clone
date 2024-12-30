// const apiKey = import.meta.env.VITE_API_KEY;

const apiKey = process.env.VITE_API_KEY;

const requests = {
  fetchVideoList: `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${apiKey}&`,
  fetchVideoDetails: `/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${apiKey}&`,
  fetchChannelData: `/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${apiKey}&`,
  fetchComment: `/commentThreads?part=snippet%2Creplies&maxResults=50&key=${apiKey}&`,
  fetchRelatedVideo: `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&key=${apiKey}&`,
};
export default requests;
