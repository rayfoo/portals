import React from 'react';
import { Body, Title, Byline } from '../Elements/Text';
import { Avatar } from '../Elements/Avatar';
import { PostType } from '../Post';
import { EmbeddedBubble } from '../PostBubble';
import { EmbeddedMedia } from '../EmbeddedMedia';

type props = {
  post: PostType;
  onClick: (payload: any) => void;
};

export function EmbeddedPost({ post, onClick }: props) {
  const isLongText = post.body.length > 280;

  return (
    <EmbeddedBubble>
      <Avatar size="sm" url={post.user.avatarURL} alt="user avatar" />
      <span className="ml-2">
        <Title clickable styles="inline">
          {post.user.handle}
        </Title>
        <Byline clickable styles="inline">{` in ${post.postedIn.name}`}</Byline>
      </span>

      <div onClick={() => onClick(post)}>
        <Body clickable styles="mt-1">
          {isLongText ? `${post.body.slice(0, 279)}...` : post.body}
        </Body>
      </div>

      <EmbeddedMedia media={post.media} maxHeight={180} />
    </EmbeddedBubble>
  );
}
