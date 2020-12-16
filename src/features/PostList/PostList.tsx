import React from 'react';
import { Post, PostType } from '../../components/Post';

type props = {
  posts: PostType[];
  openSlider: (payload: any) => void;
};

export function PostList({ posts, openSlider }: props) {
  return (
    <>
      {posts.map((post) => (
        <Post post={post} openSlider={openSlider} />
      ))}
    </>
  );
}
