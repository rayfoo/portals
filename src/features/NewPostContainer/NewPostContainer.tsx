import React from 'react';

import { useRouter } from '../../hooks';
import { Drawer } from '../../components/Drawer';
import {
  NewPost,
  NewPostHeader,
  NewPostFooter,
} from '../../components/NewPost';

export function NewPostContainer() {
  const { goBack, getPath } = useRouter();
  const isOpen = getPath() === '/new/post' ? true : false;

  return (
    <Drawer
      header={<NewPostHeader onClose={() => goBack()} />}
      footer={<NewPostFooter />}
      isOpen={isOpen}
      onClose={() => goBack()}
    >
      <NewPost />
    </Drawer>
  );
}
