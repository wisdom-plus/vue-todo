const fetchItems = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("データが取得できませんでした");
    console.error(error);
  }
};

export default fetchItems;
