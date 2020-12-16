import React from 'react';
import SmartGallery from 'react-smart-gallery';

import { Body, Title, Byline } from '../Elements/Text';
import { Avatar } from '../Elements/Avatar';
import { PostType } from '../Post';
import { EmbeddedBubble } from '../PostBubble';
import { parent as fakeParent } from '../../data';

type props = {
  parent: PostType['parent'];
  media: PostType['media'];
  onImageClick: (index: number) => void;
  onParentClick: (payload: any) => void;
};

export function PostAttachment({
  parent,
  media,
  onImageClick,
  onParentClick,
}: props) {
  // Is there a parent? If so, return the parent as the attachment
  // If not, if else for images and video
  const handleImageClick = (index: number) => {
    onImageClick(index);
  };

  const handleParentClick = () => {
    onParentClick({});
  };

  if (parent) {
    const isLongText = fakeParent.body.length > 280;

    return (
      <div className="mt-2" onClick={handleParentClick}>
        <EmbeddedBubble>
          <Avatar size="sm" url={fakeParent.user.avatarURL} alt="user avatar" />
          <span className="ml-2">
            <Title clickable styles="inline">
              {fakeParent.user.handle}
            </Title>
            <Byline
              clickable
              styles="inline"
            >{` in ${fakeParent.postedIn.name}`}</Byline>
          </span>

          <Body clickable styles="mt-1">
            {isLongText
              ? `${fakeParent.body.slice(0, 279)}...`
              : fakeParent.body}
          </Body>
        </EmbeddedBubble>
      </div>
    );
  }

  if (media.images.length > 0)
    return (
      <>
        <div className="mt-2 lg:hidden">
          <SmartGallery
            images={media.images}
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
              handleImageClick(index + 1);
            }}
          />
        </div>

        <div className="mt-2 hidden lg:block">
          <SmartGallery
            images={media.images}
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
              handleImageClick(index + 1);
            }}
          />
        </div>
      </>
    );

  if (media.video) {
    return (
      <>
        Some video component
        <div>Some more content</div>
      </>
    );
  }

  return <div>Something else</div>;
}
