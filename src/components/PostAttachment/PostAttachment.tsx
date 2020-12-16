import React from 'react';
import SmartGallery from 'react-smart-gallery';
import { PostType } from '../Post';

type props = {
  parent: PostType['parent'];
  media: PostType['media'];
  onImageClick: (index: number) => void;
};

export function PostAttachment({ parent, media, onImageClick }: props) {
  // Is there a parent? If so, return the parent as the attachment
  // If not, if else for images and video
  const handleImageClick = (index: number) => {
    onImageClick(index);
  };

  if (parent) {
    return (
      <>
        Some parent component
        <div>Some more content</div>
      </>
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
