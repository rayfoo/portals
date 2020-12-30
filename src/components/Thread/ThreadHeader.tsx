import React from 'react';
import { CornerUpLeft, XCircle, Bookmark } from 'react-feather';
import { Heading } from '../Elements/Text';

type props = {
  onClose: () => void;
  onPrev: () => void;
};

export function ThreadHeader({ onClose, onPrev }: props) {
  return (
    <div className="p-4 bg-blue-600 rounded-t-2xl flex flex-row">
      <CornerUpLeft
        color="white"
        size={24}
        className="mr-2 cursor-pointer"
        onClick={onPrev}
      />
      <Heading invert>Thread</Heading>
      <Bookmark color="white" size={24} className="ml-auto cursor-pointer" />
      <XCircle
        color="white"
        size={24}
        className="ml-2 cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
}
