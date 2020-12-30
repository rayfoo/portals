import React from 'react';

import { useRouter } from '../../hooks';
import { Drawer } from '../../components/Drawer';
import { NewPost } from '../../components/NewPost';

export function NewPostContainer() {
  const { goBack, getPath } = useRouter();
  const isOpen = getPath() === '/new/post' ? true : false;

  return (
    <Drawer
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      isOpen={isOpen}
      onClose={() => goBack()}
    >
      <NewPost />
      {/* <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost /> */}
    </Drawer>
  );
}
