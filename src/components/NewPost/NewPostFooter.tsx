import React from 'react';
import { Image, Video } from 'react-feather';
import { PrimaryButton } from '../Elements/Button';

export function NewPostFooter() {
  return (
    <div className="p-4 flex flex-row">
      <div className="flex flex-row cursor-pointer">
        <Image
          color="#2563EB"
          strokeWidth={2}
          size={24}
          className="my-auto mr-3 hover:opacity-75"
        />
        <Video
          color="#2563EB"
          strokeWidth={2}
          size={24}
          className="my-auto mr-3 hover:opacity-75"
        />
      </div>

      <span className="ml-auto">
        <PrimaryButton roundedFull size="base">
          Post
        </PrimaryButton>
      </span>
    </div>
  );
}
