import React from 'react';

import { MobileNav } from './MobileNav';

type props = {
  children: React.ReactNode;
  heading: React.ReactNode;
};

export function Layout({ children, heading }: props) {
  return (
    <div>
      {heading}

      <main className="pt-12 pb-12 lg:pt-20">
        <div className="lg:ml-80">{children}</div>
      </main>

      <MobileNav />
    </div>
  );
}
