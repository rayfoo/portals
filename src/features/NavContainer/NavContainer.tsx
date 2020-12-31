import React, { useEffect } from 'react';

import { Link, Switch, Route, useParams } from 'react-router-dom';
import { Heading } from '../../components/Elements/Text';

export function NavContainer() {
  return (
    <nav className="bg-white fixed z-10 w-full shadow-sm">
      <div className="mx-auto px-4 lg:px-6 flex items-center justify-between h-12 lg:h-16">
        <div className="flex items-center">
          <Switch>
            <Route path="/circles/:id">
              <NavCommunityItem />
            </Route>
            <Route path="/home">
              <NavStaticItem>
                <Heading className="ml-5">Home</Heading>
              </NavStaticItem>
            </Route>
            <Route path="/circles">
              <NavStaticItem>
                <Heading className="ml-5">Circles</Heading>
              </NavStaticItem>
            </Route>
            <Route path="/explore">
              <NavStaticItem>
                <Heading className="ml-5">Explore</Heading>
              </NavStaticItem>
            </Route>
            <Route path="/profile">
              <NavStaticItem>
                <Heading className="ml-5">Profile</Heading>
              </NavStaticItem>
            </Route>
          </Switch>
        </div>
      </div>
    </nav>
  );
}

function NavStaticItem({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link to="/home">
        <img
          className="w-4 lg:w-6"
          src="https://firebasestorage.googleapis.com/v0/b/portals-7cdfd.appspot.com/o/assets%2FGroup%204.png?alt=media&token=f2cd29ae-5ae0-4f20-83ed-a16cbe1cda60"
          alt="Workflow"
        />
      </Link>

      {children}
    </>
  );
}

function NavCommunityItem() {
  const { id } = useParams();

  useEffect(() => {
    // fetch the community information
  }, [id]);

  return (
    <>
      <Link to="/home">
        <div
          className="w-6 h-6 lg:w-6 lg:h-6 rounded-md bg-gray-400 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://reactjs.org/logo-og.png")' }}
        />
      </Link>

      <Heading className="ml-3">Community #{id} </Heading>
    </>
  );
}
