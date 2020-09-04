/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRestaurantInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRestaurantConditionInput | null > | null,
  or?: Array< ModelRestaurantConditionInput | null > | null,
  not?: ModelRestaurantConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateRestaurantInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteRestaurantInput = {
  id?: string | null,
};

export type CreateRestaurantCommentInput = {
  id?: string | null,
  content?: string | null,
  restaurantCommentsId: string,
};

export type ModelRestaurantCommentConditionInput = {
  content?: ModelStringInput | null,
  restaurantCommentsId?: ModelIDInput | null,
  and?: Array< ModelRestaurantCommentConditionInput | null > | null,
  or?: Array< ModelRestaurantCommentConditionInput | null > | null,
  not?: ModelRestaurantCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateRestaurantCommentInput = {
  id: string,
  content?: string | null,
  restaurantCommentsId?: string | null,
};

export type DeleteRestaurantCommentInput = {
  id?: string | null,
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRestaurantFilterInput | null > | null,
  or?: Array< ModelRestaurantFilterInput | null > | null,
  not?: ModelRestaurantFilterInput | null,
};

export type ModelRestaurantCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  restaurantCommentsId?: ModelIDInput | null,
  and?: Array< ModelRestaurantCommentFilterInput | null > | null,
  or?: Array< ModelRestaurantCommentFilterInput | null > | null,
  not?: ModelRestaurantCommentFilterInput | null,
};

export type CreateRestaurantMutationVariables = {
  input: CreateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type CreateRestaurantMutation = {
  createRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string | null,
    description: string | null,
    comments:  {
      __typename: "ModelRestaurantCommentConnection",
      items:  Array< {
        __typename: "RestaurantComment",
        id: string,
        content: string | null,
        restaurantCommentsId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRestaurantMutationVariables = {
  input: UpdateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type UpdateRestaurantMutation = {
  updateRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string | null,
    description: string | null,
    comments:  {
      __typename: "ModelRestaurantCommentConnection",
      items:  Array< {
        __typename: "RestaurantComment",
        id: string,
        content: string | null,
        restaurantCommentsId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRestaurantMutationVariables = {
  input: DeleteRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type DeleteRestaurantMutation = {
  deleteRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string | null,
    description: string | null,
    comments:  {
      __typename: "ModelRestaurantCommentConnection",
      items:  Array< {
        __typename: "RestaurantComment",
        id: string,
        content: string | null,
        restaurantCommentsId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRestaurantCommentMutationVariables = {
  input: CreateRestaurantCommentInput,
  condition?: ModelRestaurantCommentConditionInput | null,
};

export type CreateRestaurantCommentMutation = {
  createRestaurantComment:  {
    __typename: "RestaurantComment",
    id: string,
    content: string | null,
    restaurantCommentsId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRestaurantCommentMutationVariables = {
  input: UpdateRestaurantCommentInput,
  condition?: ModelRestaurantCommentConditionInput | null,
};

export type UpdateRestaurantCommentMutation = {
  updateRestaurantComment:  {
    __typename: "RestaurantComment",
    id: string,
    content: string | null,
    restaurantCommentsId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRestaurantCommentMutationVariables = {
  input: DeleteRestaurantCommentInput,
  condition?: ModelRestaurantCommentConditionInput | null,
};

export type DeleteRestaurantCommentMutation = {
  deleteRestaurantComment:  {
    __typename: "RestaurantComment",
    id: string,
    content: string | null,
    restaurantCommentsId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRestaurantQueryVariables = {
  id: string,
};

export type GetRestaurantQuery = {
  getRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string | null,
    description: string | null,
    comments:  {
      __typename: "ModelRestaurantCommentConnection",
      items:  Array< {
        __typename: "RestaurantComment",
        id: string,
        content: string | null,
        restaurantCommentsId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRestaurantsQueryVariables = {
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantsQuery = {
  listRestaurants:  {
    __typename: "ModelRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      id: string,
      name: string | null,
      description: string | null,
      comments:  {
        __typename: "ModelRestaurantCommentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRestaurantCommentQueryVariables = {
  id: string,
};

export type GetRestaurantCommentQuery = {
  getRestaurantComment:  {
    __typename: "RestaurantComment",
    id: string,
    content: string | null,
    restaurantCommentsId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRestaurantCommentsQueryVariables = {
  filter?: ModelRestaurantCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantCommentsQuery = {
  listRestaurantComments:  {
    __typename: "ModelRestaurantCommentConnection",
    items:  Array< {
      __typename: "RestaurantComment",
      id: string,
      content: string | null,
      restaurantCommentsId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCommentsByRestaurantIdSubscriptionVariables = {
  restaurantCommentsId: string,
};

export type OnCommentsByRestaurantIdSubscription = {
  onCommentsByRestaurantId:  {
    __typename: "RestaurantComment",
    id: string,
    content: string | null,
    restaurantCommentsId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRestaurantSubscription = {
  onCreateRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string | null,
    description: string | null,
    comments:  {
      __typename: "ModelRestaurantCommentConnection",
      items:  Array< {
        __typename: "RestaurantComment",
        id: string,
        content: string | null,
        restaurantCommentsId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRestaurantSubscription = {
  onUpdateRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string | null,
    description: string | null,
    comments:  {
      __typename: "ModelRestaurantCommentConnection",
      items:  Array< {
        __typename: "RestaurantComment",
        id: string,
        content: string | null,
        restaurantCommentsId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRestaurantSubscription = {
  onDeleteRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string | null,
    description: string | null,
    comments:  {
      __typename: "ModelRestaurantCommentConnection",
      items:  Array< {
        __typename: "RestaurantComment",
        id: string,
        content: string | null,
        restaurantCommentsId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRestaurantCommentSubscription = {
  onCreateRestaurantComment:  {
    __typename: "RestaurantComment",
    id: string,
    content: string | null,
    restaurantCommentsId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRestaurantCommentSubscription = {
  onUpdateRestaurantComment:  {
    __typename: "RestaurantComment",
    id: string,
    content: string | null,
    restaurantCommentsId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRestaurantCommentSubscription = {
  onDeleteRestaurantComment:  {
    __typename: "RestaurantComment",
    id: string,
    content: string | null,
    restaurantCommentsId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
