import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { Container } from '../Elements/Container';
import { Heading } from '../Elements/Text';
import { MobileNav } from './MobileNav';

type props = {
  children: React.ReactNode;
  heading: React.ReactNode;
};

export function Layout({ children, heading }: props) {
  return (
    <div>
      {heading}

      <main>
        <div className="max-w-7xl mx-auto py-6 px-4 lg:px-6">
          <div className="mt-10 lg:mt-20">
            <div className="rounded-2xl w-72 py-8 px-3 bg-gray-200 fixed hidden lg:block">
              Sidebar
            </div>

            <Container>{children}</Container>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
