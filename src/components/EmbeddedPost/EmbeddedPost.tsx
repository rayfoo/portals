import React from 'react';

import { useThread } from '../../hooks';
import { Body, Title, Byline } from '../Elements/Text';
import { Avatar } from '../Elements/Avatar';
import { PostType } from '../Post';
import { EmbeddedBubble } from '../PostBubble';
import { EmbeddedMedia } from '../EmbeddedMedia';

type props = {
  post: PostType;
  onClick?: (payload: any) => void;
  media?: boolean;
};

export function EmbeddedPost({ post, onClick, media = true }: props) {
  const isLongText = post.body.length > 280;

  const { nextPost } = useThread();
  const launchThreadView = () => {
    nextPost(post);
  };

  return (
    <EmbeddedBubble>
      <Avatar size="sm" url={post.user.avatarURL} alt="user avatar" />
      <span className="ml-2">
        <Title clickable className="inline">
          {post.user.handle}
        </Title>
        <Byline
          clickable
          className="inline"
        >{` in ${post.postedIn.name}`}</Byline>
      </span>

      <div onClick={launchThreadView}>
        <Body clickable className="mt-1">
          {isLongText ? `${post.body.slice(0, 279)}...` : post.body}
        </Body>
      </div>

      {media && <EmbeddedMedia media={post.media} maxHeight={180} />}
    </EmbeddedBubble>
  );
}
