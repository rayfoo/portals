import React from 'react';
import { Heart, MessageCircle, AlertOctagon } from 'react-feather';
import { Byline } from '../Elements/Text';

export function ThreadFooter() {
  return (
    <div className="p-4 flex flex-row justify-around">
      <span className="flex flex-row items-center">
        <Heart className="mr-1" color="#111827" size={14} strokeWidth={3} />
        <Byline clickable styles="text-gray-500 font-medium">
          Upvote
        </Byline>
      </span>
      <span className="flex flex-row items-center">
        <MessageCircle
          className="mr-1"
          color="#111827"
          size={14}
          strokeWidth={3}
        />
        <Byline clickable styles="text-gray-500 font-medium">
          Reply
        </Byline>
      </span>
      <span className="flex flex-row items-center">
        <AlertOctagon
          className="mr-1"
          color="#111827"
          size={14}
          strokeWidth={3}
        />
        <Byline clickable styles="text-gray-500 font-medium">
          Report
        </Byline>
      </span>
    </div>
  );
}
