import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'react-tiny-fab/dist/styles.css';

import './App.css';
import { Store } from './store';
import { Layout } from './components/Layout';
import { PostList } from './features/PostList';
import { posts } from './data';
import { ThreadContainer } from './features/ThreadContainer';
import { NewPostContainer } from './features/NewPostContainer';
import { NavContainer } from './features/NavContainer';
import { Fab } from './components/Fab';

function App() {
  return (
    <Store>
      <Router>
        <div className="app">
          <Layout
            heading={
              <Route path="/">
                <NavContainer />
              </Route>
            }
          >
            <Switch>
              <Route path="/circles/:id">
                <h1>Community Feed</h1>
              </Route>

              <Route path="/circles">
                <Link to="/circles/1" className="cursor-pointer">
                  Community #1
                </Link>
                <Link to="/circles/2" className="cursor-pointer">
                  Community #2
                </Link>
                <Link to="/circles/3" className="cursor-pointer">
                  Community #3
                </Link>
              </Route>

              <Route path="/explore">
                <h1>Explore</h1>
              </Route>

              <Route path="/profile">
                <h1>Profile</h1>
              </Route>

              <Route path="/home">
                <PostList posts={posts} />
              </Route>
            </Switch>
          </Layout>

          <Switch>
            <Route path="/new/post">
              <NewPostContainer />
            </Route>

            <Route path="/">
              <ThreadContainer />
            </Route>
          </Switch>

          <div className="hidden lg:contents">
            <Fab />
          </div>
        </div>
      </Router>
    </Store>
  );
}

export default App;
