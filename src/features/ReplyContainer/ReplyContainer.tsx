import { Reply } from '../../components/Reply';
import { reply } from '../../data';

type props = {
  id: string;
};

export function ReplyContainer({ id = '123' }: props) {
  const post = reply;

  return (
    <div className="mt-6">
      <Reply post={post} />
      <Reply post={post} />
      <Reply post={post} />
      <Reply post={post} />
      <Reply post={post} />
      <Reply post={post} />
    </div>
  );
}
