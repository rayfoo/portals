import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from './components/Elements/Tab';
import './components/Elements/Tab/styles.css';

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
import { CommunityCard } from './components/CommunityCard';
import { Container } from './components/Elements/Container';
import { Heading, Title } from './components/Elements/Text';

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
                <h1>Community</h1>
              </Route>

              <Route path="/circles">
                <Tabs>
                  <TabList>
                    <Tab>
                      <Title clickable className="text-center">
                        COMMUNITIES
                      </Title>
                    </Tab>
                    <Tab>
                      <Title clickable className="text-center">
                        FOLLOWERS
                      </Title>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <Container>
                      <CommunityCard />
                      <CommunityCard />
                      <CommunityCard />
                    </Container>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                </Tabs>
              </Route>

              <Route path="/explore">
                <Container>
                  <CommunityCard />
                  <CommunityCard />
                  <CommunityCard />
                </Container>
              </Route>

              <Route path="/profile">
                <h1>Profile</h1>
              </Route>

              <Route path="/home">
                <Container>
                  <PostList posts={posts} />
                </Container>
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
