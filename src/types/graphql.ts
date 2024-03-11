import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import { gql } from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: any; output: any }
  Object: { input: any; output: any }
}

export type Book = {
  __typename?: 'Book'
  _id?: Maybe<Scalars['ID']['output']>
  createdAt?: Maybe<Scalars['Date']['output']>
  name: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['Date']['output']>
}

export type CreateBookInput = {
  name?: InputMaybe<Scalars['String']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  _?: Maybe<Scalars['Boolean']['output']>
  createBook: Book
  deleteBook: Book
  updateBook: Book
}

export type MutationCreateBookArgs = {
  createBookInput: CreateBookInput
}

export type MutationDeleteBookArgs = {
  _id: Scalars['ID']['input']
}

export type MutationUpdateBookArgs = {
  updateBookInput: UpdateBookInput
}

export type PaginateBook = {
  __typename?: 'PaginateBook'
  docs: Array<Maybe<Book>>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  meta?: Maybe<Scalars['Object']['output']>
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
}

export type PaginateInput = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['Object']['input']>
}

export type Query = {
  __typename?: 'Query'
  _?: Maybe<Scalars['Boolean']['output']>
  getBookById: Book
  listBook: PaginateBook
}

export type QueryGetBookByIdArgs = {
  _id: Scalars['ID']['input']
}

export type QueryListBookArgs = {
  paginate?: InputMaybe<PaginateInput>
  query?: InputMaybe<Scalars['String']['input']>
}

export type UpdateBookInput = {
  _id: Scalars['ID']['input']
  name?: InputMaybe<Scalars['String']['input']>
}

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Book: ResolverTypeWrapper<Book>
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  String: ResolverTypeWrapper<Scalars['String']['output']>
  CreateBookInput: CreateBookInput
  Date: ResolverTypeWrapper<Scalars['Date']['output']>
  Mutation: ResolverTypeWrapper<{}>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Object: ResolverTypeWrapper<Scalars['Object']['output']>
  PaginateBook: ResolverTypeWrapper<PaginateBook>
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  PaginateInput: PaginateInput
  Query: ResolverTypeWrapper<{}>
  UpdateBookInput: UpdateBookInput
  AdditionalEntityFields: AdditionalEntityFields
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Book: Book
  ID: Scalars['ID']['output']
  String: Scalars['String']['output']
  CreateBookInput: CreateBookInput
  Date: Scalars['Date']['output']
  Mutation: {}
  Boolean: Scalars['Boolean']['output']
  Object: Scalars['Object']['output']
  PaginateBook: PaginateBook
  Int: Scalars['Int']['output']
  PaginateInput: PaginateInput
  Query: {}
  UpdateBookInput: UpdateBookInput
  AdditionalEntityFields: AdditionalEntityFields
}

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']['input']>
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>
}

export type UnionDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = UnionDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String']['input']
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>
}

export type AbstractEntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = AbstractEntityDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']['input']>
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>
}

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EntityDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']['input']>
}

export type ColumnDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ColumnDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type IdDirectiveArgs = {}

export type IdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IdDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']['input']>
}

export type LinkDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = LinkDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type EmbeddedDirectiveArgs = {}

export type EmbeddedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EmbeddedDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type MapDirectiveArgs = {
  path: Scalars['String']['input']
}

export type MapDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = MapDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type BookResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Book'] = ResolversParentTypes['Book'],
> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  createBook?: Resolver<
    ResolversTypes['Book'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateBookArgs, 'createBookInput'>
  >
  deleteBook?: Resolver<
    ResolversTypes['Book'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBookArgs, '_id'>
  >
  updateBook?: Resolver<
    ResolversTypes['Book'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBookArgs, 'updateBookInput'>
  >
}

export interface ObjectScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Object'], any> {
  name: 'Object'
}

export type PaginateBookResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PaginateBook'] = ResolversParentTypes['PaginateBook'],
> = {
  docs?: Resolver<Array<Maybe<ResolversTypes['Book']>>, ParentType, ContextType>
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  hasPrevPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meta?: Resolver<Maybe<ResolversTypes['Object']>, ParentType, ContextType>
  nextPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  pagingCounter?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  prevPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  totalDocs?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  getBookById?: Resolver<
    ResolversTypes['Book'],
    ParentType,
    ContextType,
    RequireFields<QueryGetBookByIdArgs, '_id'>
  >
  listBook?: Resolver<
    ResolversTypes['PaginateBook'],
    ParentType,
    ContextType,
    Partial<QueryListBookArgs>
  >
}

export type Resolvers<ContextType = any> = {
  Book?: BookResolvers<ContextType>
  Date?: GraphQLScalarType
  Mutation?: MutationResolvers<ContextType>
  Object?: GraphQLScalarType
  PaginateBook?: PaginateBookResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
}

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>
  entity?: EntityDirectiveResolver<any, any, ContextType>
  column?: ColumnDirectiveResolver<any, any, ContextType>
  id?: IdDirectiveResolver<any, any, ContextType>
  link?: LinkDirectiveResolver<any, any, ContextType>
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>
  map?: MapDirectiveResolver<any, any, ContextType>
}

import { ObjectId } from 'mongodb'
export type BookDbObject = {
  _id?: Maybe<ObjectId>
  createdAt?: Maybe<any>
  name: string
  updatedAt?: Maybe<any>
}
