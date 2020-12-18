import React from 'react';

import { Title, Body, Byline, Minion } from '../Elements/Text';
import { Avatar } from '../Elements/Avatar';
import { EmbeddedMedia } from '../EmbeddedMedia';
import { EmbeddedPostContainer } from '../../features/EmbeddedPostContainer';
import { PostType } from '../Post';
import { Reply } from '../Reply';

type props = {
  post: PostType;
};

export function Thread({ post }: props) {
  const isExpandable = post.body.length > 280;

  const [expandState, setExpandState] = React.useState(!isExpandable);

  const toggleBodyExpand = () => setExpandState((previous) => !previous);

  const Expandable = (
    <div onClick={toggleBodyExpand}>
      {expandState ? (
        <Minion clickable>Show less</Minion>
      ) : (
        <Minion clickable styles="text-blue-600">
          Show more
        </Minion>
      )}
    </div>
  );

  return (
    <div>
      <div className="">
        <Avatar url={post.user.avatarURL} alt="user avatar" />

        <Title styles="inline ml-2">{post.user.handle}</Title>
        {post.parent ? (
          <Byline styles="inline"> posted a reply</Byline>
        ) : (
          <Byline styles="inline">{` in ${post.postedIn.name}`}</Byline>
        )}
      </div>

      <div className="mt-2">
        <div onClick={toggleBodyExpand}>
          <Body clickable>
            {expandState ? post.body : post.body.slice(0, 279)}
          </Body>
        </div>

        {isExpandable && Expandable}

        <div className="mt-2">
          {post.parent ? (
            <EmbeddedPostContainer id={post.parent} />
          ) : (
            <EmbeddedMedia media={post.media} />
          )}
        </div>

        <div className="bg-gray-100 p-4 mt-4 rounded-xl">
          <span className="mr-2 md:mr-3">
            <Title styles="inline">20</Title>
            <Byline styles="inline ml-1">Replies</Byline>
          </span>
          <span className="mr-2 md:mr-3">
            <Title styles="inline">20</Title>
            <Byline styles="inline ml-1">Upvotes</Byline>
          </span>
          <span className="float-right">
            <Title clickable styles="inline underline">
              Latest Posts v
            </Title>
          </span>
        </div>

        <div className="mt-6">
          <Reply post={post} />
          <Reply post={post} />
          <Reply post={post} />
          <Reply post={post} />
        </div>
      </div>
    </div>
  );
}
