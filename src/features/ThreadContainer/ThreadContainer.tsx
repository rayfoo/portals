import React from 'react';
import { useLocation } from 'react-router-dom';

import { useThread } from '../../hooks';
import { Drawer } from '../../components/Drawer';
import { Thread, ThreadHeader, ThreadFooter } from '../../components/Thread';

export function ThreadContainer() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentPostID = query.get('postID');
  const isOpen = currentPostID ? true : false;

  const { closePost, prevPost } = useThread();

  return (
    <Drawer
      header={
        <ThreadHeader onClose={() => closePost()} onPrev={() => prevPost()} />
      }
      footer={<ThreadFooter />}
      isOpen={isOpen}
      onClose={() => closePost()}
    >
      <Thread />
    </Drawer>
  );
}
