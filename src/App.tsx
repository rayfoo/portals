import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import { Store } from './store';
import { Layout } from './components/Layout';
import { PostList } from './features/PostList';
import { posts } from './data';
import { Slider } from './components/Slider';
import { Thread } from './components/Thread';
import { InputBox } from './components/InputBox';

function App() {
  return (
    <Store>
      <Router>
        <div className="app">
          <Layout>
            <InputBox />

            <Switch>
              <Route path="/test">
                <h1>Another route</h1>
              </Route>

              <Route path="/">
                <PostList posts={posts} />
              </Route>
            </Switch>
          </Layout>

          <Route path="/">
            <Slider>
              <Thread />
            </Slider>
          </Route>
        </div>
      </Router>
    </Store>
  );
}

export default App;
