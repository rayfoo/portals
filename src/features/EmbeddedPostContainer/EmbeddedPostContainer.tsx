import React from 'react';
import { parent } from '../../data';
import { EmbeddedPost } from '../../components/EmbeddedPost';

type props = {
  id: string;
  onClick: (payload: any) => void;
};

export function EmbeddedPostContainer({ id, onClick }: props) {
  // do some fetching
  const post = parent;

  return <EmbeddedPost post={post} onClick={onClick} />;
}
