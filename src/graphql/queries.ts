/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEssayCategory = /* GraphQL */ `
  query GetEssayCategory($id: ID!) {
    getEssayCategory(id: $id) {
      id
      name
      temp
      essays {
        items {
          id
          name
          imageUri
          audioUri
          temp
          essayCategoryId
          authorId
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
export const listEssayCategorys = /* GraphQL */ `
  query ListEssayCategorys(
    $filter: ModelEssayCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEssayCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        temp
        essays {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      id
      name
      imageUri
      temp
      essays {
        items {
          id
          name
          imageUri
          audioUri
          temp
          essayCategoryId
          authorId
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
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        temp
        essays {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEssay = /* GraphQL */ `
  query GetEssay($id: ID!) {
    getEssay(id: $id) {
      id
      name
      imageUri
      audioUri
      temp
      essayCategoryId
      essayCategory {
        id
        name
        temp
        essays {
          nextToken
        }
        createdAt
        updatedAt
      }
      authorId
      author {
        id
        name
        imageUri
        temp
        essays {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEssays = /* GraphQL */ `
  query ListEssays(
    $filter: ModelEssayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEssays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        audioUri
        temp
        essayCategoryId
        essayCategory {
          id
          name
          temp
          createdAt
          updatedAt
        }
        authorId
        author {
          id
          name
          imageUri
          temp
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
