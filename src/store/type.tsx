import { PostType } from '../components/Post';

export type stateType = {
  slider: {
    isOpen: boolean;
  };
  currentPost: number;
  posts: PostType[] | [];
  error: any;
};

export type actionType = {
  type: string;
  payload: any;
};
