import React from 'react';
import { parent } from '../../data';
import { EmbeddedPost } from '../../components/EmbeddedPost';
import { PostType } from '../../components/Post';

type props = {
  id: string;
  onClick: (payload: any) => void;
};

export function EmbeddedPostContainer({ id, onClick }: props) {
  // do some fetching
  const post = parent;

  return (
    <div onClick={() => onClick(post)}>
      <EmbeddedPost post={post} />;
    </div>
  );
}
