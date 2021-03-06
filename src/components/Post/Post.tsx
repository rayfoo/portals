import React from 'react';

import { Title, Body, BodyTitle, Byline, Minion } from '../Elements/Text';
import { Avatar } from '../Elements/Avatar';
import { EmbeddedMedia } from '../EmbeddedMedia';
import { EmbeddedPostContainer } from '../../features/EmbeddedPostContainer';
import { PostBubble } from '../PostBubble';
import { PostType } from './types';
import { PostParser } from '../PostParser';
import { useThread } from '../../hooks';

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
  const { nextPost } = useThread();
  const toggleBodyExpand = () => setExpandState((previous) => !previous);
  const launchThreadView = () => {
    nextPost(post);
  };

  const Header = (
    <>
      <Title className="inline">{post.user.handle}</Title>
      {post.parent ? (
        <Byline className="inline"> posted a reply</Byline>
      ) : (
        <Byline className="inline">{` in ${post.postedIn.name}`}</Byline>
      )}
    </>
  );

  const Expandable = (
    <span onClick={toggleBodyExpand} className="inline">
      {expandState ? (
        <Minion clickable className="inline">
          Show less
        </Minion>
      ) : (
        <Minion clickable className="text-blue-600 inline">
          Show more
        </Minion>
      )}
    </span>
  );

  return (
    <article className="flex flex-row mb-8">
      <Avatar url={post.user.avatarURL} alt="user avatar" />

      <Content header={Header} post={post}>
        <PostBubble className={`${post.replies && 'shadow-lg'}`}>
          <div onClick={launchThreadView}>
            <PostParser>
              <BodyTitle className="mb-1">{post.title} </BodyTitle>
            </PostParser>
            <PostParser>
              <Body clickable>
                {expandState ? post.body : post.body.slice(0, 279)}
              </Body>
            </PostParser>
          </div>

          {isExpandable && Expandable}

          <div className="mt-2">
            {post.parent ? (
              <EmbeddedPostContainer id={post.parent} />
            ) : (
              <EmbeddedMedia media={post.media} />
            )}
          </div>
        </PostBubble>
      </Content>
    </article>
  );
}

export function Replies({ count }: { count: number }) {
  const NoReplies = (
    <Minion clickable className="ml-auto mt-1 pr-2">
      Reply
    </Minion>
  );

  const HasReplies = (
    <div
      className={`ml-6 -mt-3 pt-3 pb-1 px-2 bg-blue-600 rounded-b-2xl -z-10`}
    >
      <Minion clickable invert className="float-right">
        {count} replies
      </Minion>
    </div>
  );

  return <>{count ? HasReplies : NoReplies}</>;
}

export function Content({ header, post, children }: ContentProps) {
  return (
    <div className="ml-2 flex flex-col flex-grow">
      <div className="mb-1 lg:mb-2">{header}</div>

      {children}

      <Replies count={post.replies} />
    </div>
  );
}
