export enum PostType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}

export interface IPostCreate {
  readonly title: string;
  readonly content: string;
}

export interface IPostUpdate {
  readonly id: number;
  readonly title: string;
  readonly content: string;
}

export interface IPost {
  readonly id: number;
  readonly title: string;
  readonly content: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}
