import React from 'react';
import { CornerUpLeft, XCircle, Bookmark } from 'react-feather';
import { Heading } from '../Elements/Text';

type props = {
  onClose: () => void;
};

export function NewPostHeader({ onClose }: props) {
  return (
    <div className="p-4 bg-blue-600 rounded-t-2xl flex flex-row">
      <Heading invert>New post</Heading>
      <XCircle
        color="white"
        size={24}
        className="ml-auto cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
}
