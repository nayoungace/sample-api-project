export interface PostCreate {
  readonly title: string;
  readonly content: string;
}

export class Post {
  constructor(readonly id: string, readonly title: string, readonly content: string) {}
}
