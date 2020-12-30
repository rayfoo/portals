import React from 'react';
import { useHistory } from 'react-router-dom';

export function useRouter() {
  const history = useHistory();

  console.log('HISTORY', history);

  const goTo = (link: string) => {
    history.push(link);
  };

  return {
    goTo,
  };
}
