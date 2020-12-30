import React from 'react';
import { Image, Video } from 'react-feather';

export function NewPostFooter() {
  return (
    <div className="p-4 flex flex-row justify-around">
      <div className="flex flex-row cursor-pointer mt-2">
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

      <div className="py-1 px-4 bg-blue-600 rounded-full ml-auto text-white">
        Post
      </div>
    </div>
  );
}
