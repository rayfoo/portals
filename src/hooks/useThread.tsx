import { PostType } from '../components/Post';
import { useHistory } from 'react-router-dom';

export function useThread() {
  const history = useHistory();

  const nextPost = (post: PostType) => {
    history.push({
      search: `?postID=${post.id}`,
      state: { currentPost: post },
    });
  };

  const prevPost = () => {
    history.goBack();
  };

  const closePost = () => {
    history.push({ search: '' });
  };

  return {
    nextPost,
    prevPost,
    closePost,
  };
}
