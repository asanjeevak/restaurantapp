/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
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
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
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
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
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
export const createRestaurantComment = /* GraphQL */ `
  mutation CreateRestaurantComment(
    $input: CreateRestaurantCommentInput!
    $condition: ModelRestaurantCommentConditionInput
  ) {
    createRestaurantComment(input: $input, condition: $condition) {
      id
      content
      restaurantCommentsId
      createdAt
      updatedAt
    }
  }
`;
export const updateRestaurantComment = /* GraphQL */ `
  mutation UpdateRestaurantComment(
    $input: UpdateRestaurantCommentInput!
    $condition: ModelRestaurantCommentConditionInput
  ) {
    updateRestaurantComment(input: $input, condition: $condition) {
      id
      content
      restaurantCommentsId
      createdAt
      updatedAt
    }
  }
`;
export const deleteRestaurantComment = /* GraphQL */ `
  mutation DeleteRestaurantComment(
    $input: DeleteRestaurantCommentInput!
    $condition: ModelRestaurantCommentConditionInput
  ) {
    deleteRestaurantComment(input: $input, condition: $condition) {
      id
      content
      restaurantCommentsId
      createdAt
      updatedAt
    }
  }
`;
