import React, { useEffect } from 'react';
import { ChevronDown } from 'react-feather';
import { useLocation } from 'react-router-dom';

import { Title, Body, Byline, Minion } from '../Elements/Text';
import { Avatar } from '../Elements/Avatar';
import { EmbeddedMedia } from '../EmbeddedMedia';
import { EmbeddedPostContainer } from '../../features/EmbeddedPostContainer';
import { ReplyContainer } from '../../features/ReplyContainer';
import { PostParser } from '../PostParser';
import { useRouter } from '../../hooks';

export function Thread() {
  const { getQuery } = useRouter();
  const postID = getQuery('postID');
  let post = useLocation().state?.currentPost;
  const scrollableRef = React.createRef();

  useEffect(() => {
    if (scrollableRef.current) {
      // @ts-ignore
      scrollableRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // TODO: Fetch the post if it's not available in current state
  }, [postID, scrollableRef]);

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
    // @ts-ignore
    <div ref={scrollableRef} className="p-4">
      <div>
        <Avatar url={post.user.avatarURL} alt="user avatar" />

        <Title styles="inline ml-2">{post.user.handle}</Title>
        {post.parent ? (
          <Byline styles="inline"> posted a reply</Byline>
        ) : (
          <Byline styles="inline">{` in ${post.postedIn.name}`}</Byline>
        )}
      </div>
      <div className="mt-2 relative">
        <PostParser>
          <Body clickable>
            {expandState ? post.body : post.body.slice(0, 279)}
          </Body>
        </PostParser>

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
            <Title clickable styles="inline">
              Latest Posts
            </Title>
            <ChevronDown
              color="#111827"
              strokeWidth={3}
              size={14}
              className="inline"
            />
          </span>
        </div>

        <ReplyContainer id="123" />
      </div>
    </div>
  );
}
