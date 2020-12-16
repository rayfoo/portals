export type PostType = {
  id: string;
  parent: string | null;
  user: {
    handle: string;
    avatarURL: string;
    isVerified: boolean;
  };
  postedIn: {
    name: string;
    url: string;
  };
  body: string;
  media: {
    images: string[] | [];
    video: string | '';
  };
  reactions: [
    {
      reaction: string;
      count: number;
    }
  ];
  replies: number;
};
