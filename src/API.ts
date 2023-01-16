/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEssayCategoryInput = {
  id?: string | null,
  name: string,
  temp: string,
};

export type ModelEssayCategoryConditionInput = {
  name?: ModelStringInput | null,
  temp?: ModelStringInput | null,
  and?: Array< ModelEssayCategoryConditionInput | null > | null,
  or?: Array< ModelEssayCategoryConditionInput | null > | null,
  not?: ModelEssayCategoryConditionInput | null,
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

export type EssayCategory = {
  __typename: "EssayCategory",
  id: string,
  name: string,
  temp: string,
  essays?: ModelEssayConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelEssayConnection = {
  __typename: "ModelEssayConnection",
  items:  Array<Essay | null >,
  nextToken?: string | null,
};

export type Essay = {
  __typename: "Essay",
  id: string,
  name: string,
  imageUri: string,
  audioUri: string,
  temp: string,
  essayCategoryId: string,
  essayCategory?: EssayCategory | null,
  authorId: string,
  author?: Author | null,
  createdAt: string,
  updatedAt: string,
};

export type Author = {
  __typename: "Author",
  id: string,
  name: string,
  imageUri: string,
  temp: string,
  essays?: ModelEssayConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEssayCategoryInput = {
  id: string,
  name?: string | null,
  temp?: string | null,
};

export type DeleteEssayCategoryInput = {
  id: string,
};

export type CreateAuthorInput = {
  id?: string | null,
  name: string,
  imageUri: string,
  temp: string,
};

export type ModelAuthorConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  temp?: ModelStringInput | null,
  and?: Array< ModelAuthorConditionInput | null > | null,
  or?: Array< ModelAuthorConditionInput | null > | null,
  not?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  temp?: string | null,
};

export type DeleteAuthorInput = {
  id: string,
};

export type CreateEssayInput = {
  id?: string | null,
  name: string,
  imageUri: string,
  audioUri: string,
  temp: string,
  essayCategoryId: string,
  authorId: string,
};

export type ModelEssayConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  audioUri?: ModelStringInput | null,
  temp?: ModelStringInput | null,
  essayCategoryId?: ModelIDInput | null,
  authorId?: ModelIDInput | null,
  and?: Array< ModelEssayConditionInput | null > | null,
  or?: Array< ModelEssayConditionInput | null > | null,
  not?: ModelEssayConditionInput | null,
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

export type UpdateEssayInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  audioUri?: string | null,
  temp?: string | null,
  essayCategoryId?: string | null,
  authorId?: string | null,
};

export type DeleteEssayInput = {
  id: string,
};

export type ModelEssayCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  temp?: ModelStringInput | null,
  and?: Array< ModelEssayCategoryFilterInput | null > | null,
  or?: Array< ModelEssayCategoryFilterInput | null > | null,
  not?: ModelEssayCategoryFilterInput | null,
};

export type ModelEssayCategoryConnection = {
  __typename: "ModelEssayCategoryConnection",
  items:  Array<EssayCategory | null >,
  nextToken?: string | null,
};

export type ModelAuthorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  temp?: ModelStringInput | null,
  and?: Array< ModelAuthorFilterInput | null > | null,
  or?: Array< ModelAuthorFilterInput | null > | null,
  not?: ModelAuthorFilterInput | null,
};

export type ModelAuthorConnection = {
  __typename: "ModelAuthorConnection",
  items:  Array<Author | null >,
  nextToken?: string | null,
};

export type ModelEssayFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  audioUri?: ModelStringInput | null,
  temp?: ModelStringInput | null,
  essayCategoryId?: ModelIDInput | null,
  authorId?: ModelIDInput | null,
  and?: Array< ModelEssayFilterInput | null > | null,
  or?: Array< ModelEssayFilterInput | null > | null,
  not?: ModelEssayFilterInput | null,
};

export type CreateEssayCategoryMutationVariables = {
  input: CreateEssayCategoryInput,
  condition?: ModelEssayCategoryConditionInput | null,
};

export type CreateEssayCategoryMutation = {
  createEssayCategory?:  {
    __typename: "EssayCategory",
    id: string,
    name: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEssayCategoryMutationVariables = {
  input: UpdateEssayCategoryInput,
  condition?: ModelEssayCategoryConditionInput | null,
};

export type UpdateEssayCategoryMutation = {
  updateEssayCategory?:  {
    __typename: "EssayCategory",
    id: string,
    name: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEssayCategoryMutationVariables = {
  input: DeleteEssayCategoryInput,
  condition?: ModelEssayCategoryConditionInput | null,
};

export type DeleteEssayCategoryMutation = {
  deleteEssayCategory?:  {
    __typename: "EssayCategory",
    id: string,
    name: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAuthorMutationVariables = {
  input: CreateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type CreateAuthorMutation = {
  createAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    imageUri: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAuthorMutationVariables = {
  input: UpdateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorMutation = {
  updateAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    imageUri: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorMutationVariables = {
  input: DeleteAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type DeleteAuthorMutation = {
  deleteAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    imageUri: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEssayMutationVariables = {
  input: CreateEssayInput,
  condition?: ModelEssayConditionInput | null,
};

export type CreateEssayMutation = {
  createEssay?:  {
    __typename: "Essay",
    id: string,
    name: string,
    imageUri: string,
    audioUri: string,
    temp: string,
    essayCategoryId: string,
    essayCategory?:  {
      __typename: "EssayCategory",
      id: string,
      name: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      imageUri: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEssayMutationVariables = {
  input: UpdateEssayInput,
  condition?: ModelEssayConditionInput | null,
};

export type UpdateEssayMutation = {
  updateEssay?:  {
    __typename: "Essay",
    id: string,
    name: string,
    imageUri: string,
    audioUri: string,
    temp: string,
    essayCategoryId: string,
    essayCategory?:  {
      __typename: "EssayCategory",
      id: string,
      name: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      imageUri: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEssayMutationVariables = {
  input: DeleteEssayInput,
  condition?: ModelEssayConditionInput | null,
};

export type DeleteEssayMutation = {
  deleteEssay?:  {
    __typename: "Essay",
    id: string,
    name: string,
    imageUri: string,
    audioUri: string,
    temp: string,
    essayCategoryId: string,
    essayCategory?:  {
      __typename: "EssayCategory",
      id: string,
      name: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      imageUri: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEssayCategoryQueryVariables = {
  id: string,
};

export type GetEssayCategoryQuery = {
  getEssayCategory?:  {
    __typename: "EssayCategory",
    id: string,
    name: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEssayCategorysQueryVariables = {
  filter?: ModelEssayCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEssayCategorysQuery = {
  listEssayCategorys?:  {
    __typename: "ModelEssayCategoryConnection",
    items:  Array< {
      __typename: "EssayCategory",
      id: string,
      name: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAuthorQueryVariables = {
  id: string,
};

export type GetAuthorQuery = {
  getAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    imageUri: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorsQuery = {
  listAuthors?:  {
    __typename: "ModelAuthorConnection",
    items:  Array< {
      __typename: "Author",
      id: string,
      name: string,
      imageUri: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEssayQueryVariables = {
  id: string,
};

export type GetEssayQuery = {
  getEssay?:  {
    __typename: "Essay",
    id: string,
    name: string,
    imageUri: string,
    audioUri: string,
    temp: string,
    essayCategoryId: string,
    essayCategory?:  {
      __typename: "EssayCategory",
      id: string,
      name: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      imageUri: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEssaysQueryVariables = {
  filter?: ModelEssayFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEssaysQuery = {
  listEssays?:  {
    __typename: "ModelEssayConnection",
    items:  Array< {
      __typename: "Essay",
      id: string,
      name: string,
      imageUri: string,
      audioUri: string,
      temp: string,
      essayCategoryId: string,
      essayCategory?:  {
        __typename: "EssayCategory",
        id: string,
        name: string,
        temp: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      authorId: string,
      author?:  {
        __typename: "Author",
        id: string,
        name: string,
        imageUri: string,
        temp: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEssayCategorySubscription = {
  onCreateEssayCategory?:  {
    __typename: "EssayCategory",
    id: string,
    name: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEssayCategorySubscription = {
  onUpdateEssayCategory?:  {
    __typename: "EssayCategory",
    id: string,
    name: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEssayCategorySubscription = {
  onDeleteEssayCategory?:  {
    __typename: "EssayCategory",
    id: string,
    name: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAuthorSubscription = {
  onCreateAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    imageUri: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAuthorSubscription = {
  onUpdateAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    imageUri: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAuthorSubscription = {
  onDeleteAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    imageUri: string,
    temp: string,
    essays?:  {
      __typename: "ModelEssayConnection",
      items:  Array< {
        __typename: "Essay",
        id: string,
        name: string,
        imageUri: string,
        audioUri: string,
        temp: string,
        essayCategoryId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEssaySubscription = {
  onCreateEssay?:  {
    __typename: "Essay",
    id: string,
    name: string,
    imageUri: string,
    audioUri: string,
    temp: string,
    essayCategoryId: string,
    essayCategory?:  {
      __typename: "EssayCategory",
      id: string,
      name: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      imageUri: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEssaySubscription = {
  onUpdateEssay?:  {
    __typename: "Essay",
    id: string,
    name: string,
    imageUri: string,
    audioUri: string,
    temp: string,
    essayCategoryId: string,
    essayCategory?:  {
      __typename: "EssayCategory",
      id: string,
      name: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      imageUri: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEssaySubscription = {
  onDeleteEssay?:  {
    __typename: "Essay",
    id: string,
    name: string,
    imageUri: string,
    audioUri: string,
    temp: string,
    essayCategoryId: string,
    essayCategory?:  {
      __typename: "EssayCategory",
      id: string,
      name: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authorId: string,
    author?:  {
      __typename: "Author",
      id: string,
      name: string,
      imageUri: string,
      temp: string,
      essays?:  {
        __typename: "ModelEssayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
