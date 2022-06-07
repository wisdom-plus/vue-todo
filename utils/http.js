export const fetchItems = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("データが取得できませんでした");
    console.error(error);
  }
};

export const insertItems = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).catch(() => {
    console.error(response.json());
    return;
  });
};

export default fetchItems;
