import React from 'react';
import * as linkify from 'linkifyjs';
import hashtag from 'linkifyjs/plugins/hashtag';
import Linkify from 'linkifyjs/react';

hashtag(linkify);

const linkifyOptions = {
  attributes: (href: any, type: any) => {
    if (type === 'hashtag') {
      return {
        href: `tags/${href}`,
        type,
      };
    }

    return { href, type };
  },
  className: (href: any, type: any) => {
    if (type === 'url') {
      return 'linkify_highlight--url';
    }

    return 'linkify_highlight';
  },
  ignoreTags: ['script', 'style'],
};

export function PostParser({ children }: { children: React.ReactNode }) {
  return <Linkify options={linkifyOptions}>{children}</Linkify>;
}
