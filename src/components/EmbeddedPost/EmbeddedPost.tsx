import React from 'react';
import { Body, Title, Byline } from '../Elements/Text';
import { Avatar } from '../Elements/Avatar';
import { PostType } from '../Post';
import { EmbeddedBubble } from '../PostBubble';
import { PostMedia } from '../PostMedia';

type props = {
  post: PostType;
  onMediaClick?: () => void;
};

export function EmbeddedPost({ post }: props) {
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

      <Body clickable styles="mt-1">
        {isLongText ? `${post.body.slice(0, 279)}...` : post.body}
      </Body>

      <PostMedia
        media={post.media}
        onImageClick={(index: number) => console.log()}
        maxHeight={180}
      />
    </EmbeddedBubble>
  );
}
