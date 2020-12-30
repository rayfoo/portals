import React from 'react';

import { Image, Video } from 'react-feather';
import { Avatar } from '../Elements/Avatar';
import { Title, Body } from '../Elements/Text';
import { TextArea } from '../TextArea';

export function NewPost() {
  const [focusState, setFocusState] = React.useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex-shrink-0 bg-gray-100 px-2 py-4">
        <Body className="ml-2">Select a space</Body>
        <Body className="ml-2">Dropdown for selecting spaces</Body>
      </div>
      <div className="flex flex-col flex-grow p-4">
        <div className="flex flex-shrink-0 mb-4">
          <Avatar
            size="sm"
            url="https://uifaces.co/our-content/donated/XYVACZHF.jpg"
            alt=""
          />
          <Title className="ml-2">@someone</Title>
        </div>

        <TextArea
          onFocus={setFocusState}
          isTitle
          placeholder="What is on your mind?"
        />
        <div className="mt-4">
          <TextArea
            onFocus={setFocusState}
            placeholder="Additional details"
            minRows={5}
          />
        </div>
      </div>
    </div>
  );
}
