/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCommentsByRestaurantId = /* GraphQL */ `
  subscription OnCommentsByRestaurantId($restaurantCommentsId: ID!) {
    onCommentsByRestaurantId(restaurantCommentsId: $restaurantCommentsId) {
      id
      content
      restaurantCommentsId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
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
export const onCreateRestaurantComment = /* GraphQL */ `
  subscription OnCreateRestaurantComment {
    onCreateRestaurantComment {
      id
      content
      restaurantCommentsId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRestaurantComment = /* GraphQL */ `
  subscription OnUpdateRestaurantComment {
    onUpdateRestaurantComment {
      id
      content
      restaurantCommentsId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRestaurantComment = /* GraphQL */ `
  subscription OnDeleteRestaurantComment {
    onDeleteRestaurantComment {
      id
      content
      restaurantCommentsId
      createdAt
      updatedAt
    }
  }
`;
