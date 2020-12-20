import React from 'react';
import { Bold, Italic, Underline, List, Image, Video } from 'react-feather';
import { Avatar } from '../Elements/Avatar';

export function InputBox() {
  return (
    <div className="mb-8 p-3 border-2 border-gray-200 rounded-2xl flex flex-row">
      <div className="flex flex-shrink-0">
        <Avatar
          url="https://uifaces.co/our-content/donated/XYVACZHF.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col flex-grow ml-2">
        <div className="mb-2 p-2 rounded-xl bg-gray-100">
          <div>input placeholder</div>
          <div>Image placeholder</div>
        </div>
        <div>Select Subreddit</div>
        <div className="flex flex-row content-center cursor-pointer">
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

          <div className="flex flex-row flex-grow justify-center">
            <EditorButtonList />
          </div>

          <div className="py-1 px-4 bg-blue-600 rounded-full ml-auto text-white">
            Post
          </div>
        </div>
      </div>
    </div>
  );
}

const EditorButtonList = () => (
  <>
    <EditorButton>
      <Bold color="#111827" strokeWidth={3} size={14} className="inline" />
    </EditorButton>
    <EditorButton>
      <Italic color="#111827" strokeWidth={3} size={14} className="inline" />
    </EditorButton>
    <EditorButton>
      <Underline color="#111827" strokeWidth={3} size={14} className="inline" />
    </EditorButton>
    <EditorButton>
      <List color="#111827" strokeWidth={3} size={14} className="inline" />
    </EditorButton>
  </>
);

const EditorButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2 mx-1 bg-gray-100 hover:bg-gray-300 rounded-full flex">
      {children}
    </div>
  );
};
