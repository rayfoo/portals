import React from 'react';
import { Image, Video } from 'react-feather';
import { Avatar } from '../Elements/Avatar';
import { Byline } from '../Elements/Text';
import { TextArea } from '../TextArea';

export function InputBox() {
  const [focusState, setFocusState] = React.useState(false);

  return (
    <div className="mb-8 p-3 border border-gray-200 bg-white rounded-2xl flex flex-col">
      <div className="flex flex-shrink-0 mb-2">
        <Avatar
          size="sm"
          url="https://uifaces.co/our-content/donated/XYVACZHF.jpg"
          alt=""
        />
        <Byline styles="ml-2">Post in [Community Dropdown]</Byline>
      </div>
      <div className="flex flex-col flex-grow">
        <TextArea
          onFocus={setFocusState}
          isTitle
          placeholder="What is on your mind?"
        />

        {focusState && (
          <>
            <div className="mt-1 mb-2">
              <TextArea
                onFocus={setFocusState}
                placeholder="Additional details"
              />
            </div>
            <div className="flex flex-row content-center cursor-pointer mt-2">
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

              <div className="py-1 px-4 bg-blue-600 rounded-full ml-auto text-white">
                Post
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
