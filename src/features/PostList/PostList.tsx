import React from 'react';
import { Post, PostType } from '../../components/Post';

type props = {
  posts: PostType[];
};

export function PostList({ posts }: props) {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
