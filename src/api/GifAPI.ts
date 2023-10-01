const baseUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_GIFPHY_KEY;

export const getGifData = async (gifcategory: string) => {
  const gifUrl = `${baseUrl}?api_key=${apiKey}&q=${gifcategory}&limit=10`;

  try {
    const response = await fetch(gifUrl);
    const { data } = await response.json();
    const parsedData = data.map((element) => {
      return {
        id: element?.id,
        url: element?.images?.downsized_medium.url,
        title: element?.title,
      };
    });

    return parsedData;
  } catch (error) {
    return error;
  }
};
