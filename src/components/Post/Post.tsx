import React from 'react';
import SmartGallery from 'react-smart-gallery';
import FsLightbox from 'fslightbox-react';

import { Title, Body, Byline, Minion } from '../Elements/Text';
import { Avatar } from '../Elements/Avatar';
import { PostAttachment } from '../PostAttachment';
import { PostBubble } from '../PostBubble';
import { PostType } from './types';

type PostProps = {
  post: PostType;
  children?: React.ReactNode;
  openSlider: (payload: any) => void;
};

type ContentProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  post: PostType;
};

export function Post({ post, children, openSlider }: PostProps) {
  const isExpandable = post.body.length > 280;

  const [expandState, setExpandState] = React.useState(!isExpandable);
  const [lightboxController, setLightboxController] = React.useState({
    toggler: false,
    slide: 1,
  });

  const toggleBodyExpand = () => setExpandState((previous) => !previous);

  const launchLightbox = (index: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index,
    });
  };

  const Header = (
    <>
      <Title styles="inline">{post.user.handle}</Title>
      <Byline styles="inline">{` in ${post.postedIn.name}`}</Byline>
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
        <div style={{ zIndex: 10 }}>
          <PostBubble>
            <div onClick={openSlider}>
              <Body clickable>
                {expandState ? post.body : post.body.slice(0, 279)}
              </Body>
            </div>

            {isExpandable ? Expandable : null}

            <PostAttachment
              parent={post.parent}
              media={post.media}
              onImageClick={launchLightbox}
              onParentClick={openSlider}
            />
          </PostBubble>
        </div>
      </Content>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={post.media.images}
        slide={lightboxController.slide}
      />
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
    <div className={`ml-6 -mt-3 pt-3 pb-1 px-2 bg-blue-600 rounded-b-2xl z-0`}>
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
      <div className="mb-2">{header}</div>

      {children}

      <Replies count={post.replies} />
    </div>
  );
}
