/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEssayCategory = /* GraphQL */ `
  subscription OnCreateEssayCategory {
    onCreateEssayCategory {
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
export const onUpdateEssayCategory = /* GraphQL */ `
  subscription OnUpdateEssayCategory {
    onUpdateEssayCategory {
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
export const onDeleteEssayCategory = /* GraphQL */ `
  subscription OnDeleteEssayCategory {
    onDeleteEssayCategory {
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
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
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
export const onCreateEssay = /* GraphQL */ `
  subscription OnCreateEssay {
    onCreateEssay {
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
export const onUpdateEssay = /* GraphQL */ `
  subscription OnUpdateEssay {
    onUpdateEssay {
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
export const onDeleteEssay = /* GraphQL */ `
  subscription OnDeleteEssay {
    onDeleteEssay {
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
