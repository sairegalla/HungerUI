export const filteredList = (searchTerm, resturantList) => {
  let restaurants = resturantList.filter((config) => {
    return config?.data?.name?.toLowerCase().includes(searchTerm);
  });
  return restaurants;
};
