import React from 'react';

import './App.css';
import { Layout } from './components/Layout';
import { PostList } from './features/PostList';
import { posts } from './data';
import { Slider } from './components/Slider';

function App() {
  const [sliderState, setSliderState] = React.useState({
    isOpen: false,
    payload: {},
  });

  const closeSlider = () => {
    document.body.classList.remove('modal-open');
    setSliderState({ isOpen: false, payload: {} });
  };

  const openSlider = (payload: any) => {
    document.body.classList.add('modal-open');
    setSliderState({ isOpen: true, payload });
  };

  return (
    <div className="app">
      <Layout>
        <PostList posts={posts} openSlider={openSlider} />
      </Layout>

      <Slider openState={sliderState} closeSlider={closeSlider} />
    </div>
  );
}

export default App;
