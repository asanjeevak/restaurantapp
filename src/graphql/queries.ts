/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      description
      comments {
        items {
          id
          content
          restaurantCommentsId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRestaurantComment = /* GraphQL */ `
  query GetRestaurantComment($id: ID!) {
    getRestaurantComment(id: $id) {
      id
      content
      restaurantCommentsId
      createdAt
      updatedAt
    }
  }
`;
export const listRestaurantComments = /* GraphQL */ `
  query ListRestaurantComments(
    $filter: ModelRestaurantCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurantComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        restaurantCommentsId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
