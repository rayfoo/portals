import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-tiny-fab/dist/styles.css';

import './App.css';
import { Store } from './store';
import { Layout } from './components/Layout';
import { PostList } from './features/PostList';
import { posts } from './data';
import { ThreadContainer } from './features/ThreadContainer';
import { InputBox } from './components/InputBox';
import { Fab } from './components/Fab';

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

          <Switch>
            <Route path="/new/post">
              <div>Something else</div>
            </Route>

            <Route path="/">
              <ThreadContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    </Store>
  );
}

export default App;
