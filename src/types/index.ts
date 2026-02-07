export interface User {
  username: string;
  password: string;
}

export interface Exhibit {
  id: number;
  description: string;
  imageUrl: string;
  commentCount: number;
  createdAt: string;
  user: {
    id: number;
    username: string;
  };
}
export interface FormPostValues {
  image: File | null;
  description: string;
}

export interface CreateCommentArgs {
  exhibitId: number;
  data: {
    text: string;
  };
}

export interface Comments {
  id: number;
  text: string;
  createdAt: string;
  user: {
    id: number;
    username: string;
  };
}
