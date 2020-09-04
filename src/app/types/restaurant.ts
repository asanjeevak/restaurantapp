export type Restaurant = {
  id: string,
  name: string,
  description: string
};

export type RestaurantComment = {
  id: string
  content: string
  restaurantCommentsId: string
};
