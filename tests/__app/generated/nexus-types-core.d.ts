/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BubbleMembersOrderByInput: { // input type
    firstName?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  BubbleMembersWhereInput: { // input type
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  BubbleWhereInput: { // input type
    AND?: NexusGenInputs['BubbleWhereInput'][] | null; // [BubbleWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    members?: NexusGenInputs['UserFilter'] | null; // UserFilter
    NOT?: NexusGenInputs['BubbleWhereInput'][] | null; // [BubbleWhereInput!]
    OR?: NexusGenInputs['BubbleWhereInput'][] | null; // [BubbleWhereInput!]
  }
  DateTimeFilter: { // input type
    equals?: any | null; // DateTime
    gt?: any | null; // DateTime
    gte?: any | null; // DateTime
    in?: any[] | null; // [DateTime!]
    lt?: any | null; // DateTime
    lte?: any | null; // DateTime
    not?: any | null; // DateTime
    notIn?: any[] | null; // [DateTime!]
  }
  FloatFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: number[] | null; // [Float!]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: number | null; // Float
    notIn?: number[] | null; // [Float!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  PostFilter: { // input type
    every?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    none?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    some?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
  }
  PostOrderByInput: { // input type
    id?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    rating?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  PostWhereInput: { // input type
    AND?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    authors?: NexusGenInputs['UserFilter'] | null; // UserFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    OR?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    rating?: NexusGenInputs['FloatFilter'] | null; // FloatFilter
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UUIDFilter: { // input type
    contains?: any | null; // UUID
    endsWith?: any | null; // UUID
    equals?: any | null; // UUID
    gt?: any | null; // UUID
    gte?: any | null; // UUID
    in?: any[] | null; // [UUID!]
    lt?: any | null; // UUID
    lte?: any | null; // UUID
    not?: any | null; // UUID
    notIn?: any[] | null; // [UUID!]
    startsWith?: any | null; // UUID
  }
  UserFilter: { // input type
    every?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    none?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    some?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    bubble?: NexusGenInputs['BubbleWhereInput'] | null; // BubbleWhereInput
    firstName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    lastName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    posts?: NexusGenInputs['PostFilter'] | null; // PostFilter
  }
  UserWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  OrderByArg: "asc" | "desc"
}

export interface NexusGenRootTypes {
  Bubble: { // root type
    createdAt: any; // DateTime!
    id: any; // UUID!
  }
  Post: {};
  Query: {};
  User: { // root type
    firstName: string; // String!
    id: string; // ID!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
  UUID: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BubbleMembersOrderByInput: NexusGenInputs['BubbleMembersOrderByInput'];
  BubbleMembersWhereInput: NexusGenInputs['BubbleMembersWhereInput'];
  BubbleWhereInput: NexusGenInputs['BubbleWhereInput'];
  DateTimeFilter: NexusGenInputs['DateTimeFilter'];
  FloatFilter: NexusGenInputs['FloatFilter'];
  IntFilter: NexusGenInputs['IntFilter'];
  PostFilter: NexusGenInputs['PostFilter'];
  PostOrderByInput: NexusGenInputs['PostOrderByInput'];
  PostWhereInput: NexusGenInputs['PostWhereInput'];
  StringFilter: NexusGenInputs['StringFilter'];
  UUIDFilter: NexusGenInputs['UUIDFilter'];
  UserFilter: NexusGenInputs['UserFilter'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  OrderByArg: NexusGenEnums['OrderByArg'];
}

export interface NexusGenFieldTypes {
  Bubble: { // field return type
    createdAt: any; // DateTime!
    id: any; // UUID!
    members: NexusGenRootTypes['User'][] | null; // [User!]
  }
  Post: { // field return type
    authors: NexusGenRootTypes['User'][] | null; // [User!]
  }
  Query: { // field return type
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][] | null; // [User!]
  }
  User: { // field return type
    firstName: string; // String!
    id: string; // ID!
    posts: NexusGenRootTypes['Post'][] | null; // [Post!]
  }
}

export interface NexusGenArgTypes {
  Bubble: {
    members: { // args
      first?: number | null; // Int
      orderBy?: NexusGenInputs['BubbleMembersOrderByInput'] | null; // BubbleMembersOrderByInput
      where?: NexusGenInputs['BubbleMembersWhereInput'] | null; // BubbleMembersWhereInput
    }
  }
  Post: {
    authors: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Query: {
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  User: {
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['PostOrderByInput'] | null; // PostOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Bubble" | "Post" | "Query" | "User";

export type NexusGenInputNames = "BubbleMembersOrderByInput" | "BubbleMembersWhereInput" | "BubbleWhereInput" | "DateTimeFilter" | "FloatFilter" | "IntFilter" | "PostFilter" | "PostOrderByInput" | "PostWhereInput" | "StringFilter" | "UUIDFilter" | "UserFilter" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "OrderByArg";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String" | "UUID";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}