// handle.js
export const handleNameClick = (name, setNewsData) => {
    setNewsData((prevNewsData) => {
      const selectedItem = prevNewsData.find(
        (item) => item.author?.name === name
      );
      const filteredNews = prevNewsData.filter(
        (item) => item.author?.name !== name
      );
  
      // Rearrange the data: clicked item at the first position
      return selectedItem ? [selectedItem, ...filteredNews] : prevNewsData;
    });
  };
  