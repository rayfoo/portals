import React from 'react';

import './App.css';
import { Layout } from './components/Layout';
import { PostList } from './features/PostList';
import { posts } from './data';
import { Slider } from './components/Slider';
import { PostType } from './components/Post';
import { Thread } from './components/Thread';

function App() {
  const state: {
    isOpen: boolean;
    payload: PostType | null;
  } = {
    isOpen: false,
    payload: null,
  };

  const [sliderState, setSliderState] = React.useState(state);

  const closeSlider = () => {
    document.body.classList.remove('modal-open');
    setSliderState({ isOpen: false, payload: null });
  };

  const openSlider = (payload: PostType) => {
    document.body.classList.add('modal-open');
    setSliderState(() => ({ isOpen: true, payload }));
  };

  return (
    <div className="app">
      <Layout>
        <PostList posts={posts} openSlider={openSlider} />
      </Layout>

      <Slider isOpen={sliderState.isOpen} closeSlider={closeSlider}>
        {sliderState.payload && <Thread post={sliderState.payload} />}
      </Slider>
    </div>
  );
}

export default App;
