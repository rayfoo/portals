import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export function useRouter() {
  const history = useHistory();
  const location = useLocation();

  const goTo = (link: string) => {
    history.push(link);
  };

  const getQuery = (name: string) => {
    const query = new URLSearchParams(location.search);
    const result = query.get(name);

    if (!result) {
      return null;
    }

    return result;
  };

  return {
    goTo,
    getQuery,
  };
}
