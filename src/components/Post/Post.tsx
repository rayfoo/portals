import React from 'react';
import SmartGallery from 'react-smart-gallery';

import { Title, Body, Byline, Minion } from '../Elements/Text';
import { Avatar } from '../Elements/Avatar';
import { PostType } from './types';

type PostProps = {
  post: PostType;
  children?: React.ReactNode;
};

type ContentProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

export function Post({ post, children }: PostProps) {
  const [expandable, setExpand] = React.useState(post.body.length > 280);

  const toggleBodyExpand = () => setExpand((previous) => !previous);

  const Header = (
    <>
      <Title styles="inline">{post.user.handle}</Title>
      <Byline styles="inline">{` in ${post.postedIn.name}`}</Byline>
    </>
  );

  return (
    <div className="flex flex-row">
      <Avatar url={post.user.avatarURL} alt="user avatar" />

      <Content header={Header}>
        <div style={{ zIndex: 100 }}>
          <PostBubble>
            <div onClick={toggleBodyExpand}>
              <Body clickable>
                {expandable ? post.body.slice(0, 279) : post.body}
              </Body>
            </div>

            <div onClick={toggleBodyExpand}>
              {expandable ? (
                <Minion clickable styles="text-blue-600">
                  Show more
                </Minion>
              ) : (
                <Minion clickable>Show less</Minion>
              )}
            </div>

            <div className="mt-2">
              <SmartGallery
                images={post.media.images}
                width="100%"
                height={400}
                rootStyle={{
                  overflow: 'hidden',
                  borderRadius: '16px',
                  cursor: 'pointer',
                }}
              />
            </div>
          </PostBubble>
        </div>
      </Content>
    </div>
  );
}

export function Replies({ count }: { count: number }) {
  const NoReplies = (
    <Minion clickable styles="ml-auto">
      Reply
    </Minion>
  );

  const HasReplies = (
    <div className={`ml-6 -mt-2 pt-2 pb-1 px-4 bg-blue-600 rounded-b-2xl z-0`}>
      <Minion clickable invert styles="float-right">
        {count} replies
      </Minion>
    </div>
  );

  return <>{count ? HasReplies : NoReplies}</>;
}

export function Content({ header, children }: ContentProps) {
  return (
    <div className="ml-2 flex flex-col flex-grow">
      <div className="mb-2">{header}</div>

      {children}

      <Replies count={1} />
    </div>
  );
}

function PostBubble({
  children,
  styles = '',
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <div className={`p-5 bg-gray-100 rounded-2xl rounded-tl-none ${styles}`}>
      {children}
    </div>
  );
}
