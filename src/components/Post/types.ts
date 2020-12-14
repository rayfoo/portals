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
    images?: { src: string; width: number; height: number }[];
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
