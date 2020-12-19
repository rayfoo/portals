import React from 'react';

import { Title, Body, Byline, Minion } from '../Elements/Text';
import { Avatar } from '../Elements/Avatar';
import { EmbeddedMedia } from '../EmbeddedMedia';
import { EmbeddedPostContainer } from '../../features/EmbeddedPostContainer';
import { PostBubble } from '../PostBubble';
import { PostType } from './types';
import { context } from '../../store';

type PostProps = {
  post: PostType;
};

type ContentProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  post: PostType;
};

export function Post({ post }: PostProps) {
  const isExpandable = post.body.length > 280;

  const [expandState, setExpandState] = React.useState(!isExpandable);
  const { dispatch } = React.useContext(context);
  const openSlider = (post: PostType) =>
    dispatch({ type: 'slider/open', payload: post });

  const toggleBodyExpand = () => setExpandState((previous) => !previous);

  const Header = (
    <>
      <Title styles="inline">{post.user.handle}</Title>
      {post.parent ? (
        <Byline styles="inline"> posted a reply</Byline>
      ) : (
        <Byline styles="inline">{` in ${post.postedIn.name}`}</Byline>
      )}
    </>
  );

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
    <div className="flex flex-row mb-8">
      <Avatar url={post.user.avatarURL} alt="user avatar" />

      <Content header={Header} post={post}>
        <PostBubble styles={`${post.replies && 'shadow-lg'}`}>
          <div onClick={() => openSlider(post)}>
            <Body clickable>
              {expandState ? post.body : post.body.slice(0, 279)}
            </Body>
          </div>

          {isExpandable && Expandable}

          <div className="mt-2">
            {post.parent ? (
              <EmbeddedPostContainer
                id={post.parent}
                onClick={() => openSlider(post)}
              />
            ) : (
              <EmbeddedMedia media={post.media} />
            )}
          </div>
        </PostBubble>
      </Content>
    </div>
  );
}

export function Replies({ count }: { count: number }) {
  const NoReplies = (
    <Minion clickable styles="ml-auto mt-1 pr-2">
      Reply
    </Minion>
  );

  const HasReplies = (
    <div
      className={`ml-6 -mt-3 pt-3 pb-1 px-2 bg-blue-600 rounded-b-2xl -z-10`}
    >
      <Minion clickable invert styles="float-right">
        {count} replies
      </Minion>
    </div>
  );

  return <>{count ? HasReplies : NoReplies}</>;
}

export function Content({ header, post, children }: ContentProps) {
  return (
    <div className="ml-2 flex flex-col flex-grow">
      <div className="mb-1 md:mb-2">{header}</div>

      {children}

      <Replies count={post.replies} />
    </div>
  );
}
