import React from 'react';

import { useThread } from '../../hooks';
import { Title, Body, Minion } from '../Elements/Text';
import { Avatar } from '../Elements/Avatar';
import { PostBubble } from '../PostBubble';
import { PostType } from '../Post';
import { PostParser } from '../PostParser';

type PostProps = {
  post: PostType;
};

type ContentProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  post: PostType;
};

export function Reply({ post }: PostProps) {
  const isExpandable = post.body.length > 280;
  const [expandState, setExpandState] = React.useState(!isExpandable);
  const { nextPost } = useThread();

  const launchThreadView = () => {
    nextPost(post);
  };

  const toggleBodyExpand = () => setExpandState((previous) => !previous);

  const Header = (
    <>
      <Title className="inline text-sm">{post.user.handle}</Title>
    </>
  );

  const Expandable = (
    <div onClick={toggleBodyExpand}>
      {expandState ? (
        <Minion clickable>Show less</Minion>
      ) : (
        <Minion clickable className="text-blue-600">
          Show more
        </Minion>
      )}
    </div>
  );

  return (
    <div className="flex flex-row mt-3">
      <Avatar url={post.user.avatarURL} size="sm" alt="user avatar" />

      <Content header={Header} post={post}>
        <PostBubble>
          <div onClick={launchThreadView}>
            <PostParser>
              <Body clickable>
                {expandState ? post.body : post.body.slice(0, 279)}
              </Body>
            </PostParser>
          </div>

          {isExpandable && Expandable}
        </PostBubble>
      </Content>
    </div>
  );
}

// function Replies({ count }: { count: number }) {
//   const NoReplies = (
//     <Minion clickable className="ml-auto mt-1 pr-2">
//       Reply
//     </Minion>
//   );

//   const HasReplies = (
//     <div
//       className={`ml-6 -mt-3 pt-3 pb-1 px-2 bg-blue-600 rounded-b-2xl -z-10`}
//     >
//       <Minion clickable invert className="float-right">
//         {count} replies
//       </Minion>
//     </div>
//   );

//   return <>{count ? HasReplies : NoReplies}</>;
// }

function Content({ header, post, children }: ContentProps) {
  return (
    <div className="ml-2 flex flex-col flex-grow">
      <div className="mb-1 lg:mb-2">{header}</div>

      {children}
    </div>
  );
}
