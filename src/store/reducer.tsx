import { stateType, actionType } from './type';

export const reducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case 'slider/open':
      return {
        ...state,
        posts: state.posts.concat(action.payload),
        slider: { ...state.slider, isOpen: true },
      };
    case 'slider/close':
      return { ...state, slider: { ...state.slider, isOpen: false } };
    default:
      return state;
  }
};
