const baseUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_GIFPHY_KEY;

export const getGifData = async (gifcategory: string) => {
  const gifUrl = `${baseUrl}?api_key=${apiKey}&q=${gifcategory}&limit=10`;

  try {
    const response = await fetch(gifUrl);
    const { data } = await response.json();
    return data;
  } catch (error) {
    window.alert(error);
  }
};
