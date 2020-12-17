import React from 'react';
import SmartGallery from 'react-smart-gallery';

import { PostType } from '../Post';

type props = {
  media: PostType['media'];
  maxHeight?: number;
  onImageClick: (index: number) => void;
};

export function PostMedia({ media, maxHeight = 320, onImageClick }: props) {
  const handleImageClick = (index: number) => {
    onImageClick(index);
  };

  if (media.images.length > 0)
    return (
      <>
        <div className="lg:hidden">
          <SmartGallery
            images={media.images}
            width="100%"
            height={maxHeight}
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

        <div className="hidden lg:block">
          <SmartGallery
            images={media.images}
            width="100%"
            height={maxHeight}
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
