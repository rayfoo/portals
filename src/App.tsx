import React from 'react';

import './App.css';
import { Store } from './store';
import { Layout } from './components/Layout';
import { PostList } from './features/PostList';
import { posts } from './data';
import { Slider } from './components/Slider';
import { Thread } from './components/Thread';

function App() {
  return (
    <Store>
      <div className="app">
        <Layout>
          <PostList posts={posts} />
        </Layout>

        <Slider>
          <Thread />
        </Slider>
      </div>
    </Store>
  );
}

export default App;
