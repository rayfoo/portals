import React from 'react';

import { useThread, useRouter } from '../../hooks';
import { Drawer } from '../../components/Drawer';
import { Thread, ThreadHeader, ThreadFooter } from '../../components/Thread';

export function ThreadContainer() {
  const { getQuery } = useRouter();
  const isOpen = getQuery('postID') ? true : false;

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
