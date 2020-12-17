import React from 'react';
import FsLightbox from 'fslightbox-react';
import SmartGallery from 'react-smart-gallery';

import { PostType } from '../Post';

type props = {
  media: PostType['media'];
  maxHeight?: number;
};

export function PostMedia({ media, maxHeight = 320 }: props) {
  const [lightboxController, setLightboxController] = React.useState({
    toggler: false,
    slide: 1,
  });

  const launchLightbox = (index: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index,
    });
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
              launchLightbox(index + 1);
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
              launchLightbox(index + 1);
            }}
          />
        </div>

        <FsLightbox
          toggler={lightboxController.toggler}
          sources={media.images}
          slide={lightboxController.slide}
        />
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
