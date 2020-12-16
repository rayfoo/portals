import React from 'react';
import SmartGallery from 'react-smart-gallery';
import FsLightbox from 'fslightbox-react';

import { Title, Body, Byline, Minion } from '../Elements/Text';
import { Avatar } from '../Elements/Avatar';
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

  const openLightboxOnSlide = (index: number) => {
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

            <div className="mt-2 lg:hidden">
              <SmartGallery
                images={post.media.images}
                width="100%"
                height={224}
                rootStyle={{
                  overflow: 'hidden',
                  borderRadius: '16px',
                  cursor: 'pointer',
                }}
                onImageSelect={(e: any, src: any, index: any) => {
                  // Index starts at 0 for SmartGaleery
                  // but at 1 for FsLightbox
                  openLightboxOnSlide(index + 1);
                }}
              />
            </div>

            <div className="mt-2 hidden lg:block">
              <SmartGallery
                images={post.media.images}
                width="100%"
                height={320}
                rootStyle={{
                  overflow: 'hidden',
                  borderRadius: '16px',
                  cursor: 'pointer',
                }}
                onImageSelect={(e: any, src: any, index: any) => {
                  // Index starts at 0 for SmartGaleery
                  // but at 1 for FsLightbox
                  openLightboxOnSlide(index + 1);
                }}
              />
            </div>
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
    <div className={`ml-6 -mt-2 pt-3 pb-1 px-2 bg-blue-600 rounded-b-2xl z-0`}>
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
