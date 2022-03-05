/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryGAmes
// ====================================================

export interface QueryGAmes_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryGAmes_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryGAmes_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryGAmes_games_cover | null;
  developers: QueryGAmes_games_developers[];
  price: number;
}

export interface QueryGAmes {
  games: QueryGAmes_games[];
}

export interface QueryGAmesVariables {
  limit: number;
}
