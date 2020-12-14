export type PostType = {
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
    images?: string[];
    video?: { url: string };
  };
  reactions: [
    {
      reaction: string;
      count: number;
    }
  ];
  replies: number;
};
