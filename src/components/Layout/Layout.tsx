import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../Elements/Container';
import { Heading } from '../Elements/Text';
import { MobileNav } from './MobileNav';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="bg-white fixed z-10 w-full shadow-sm">
        <div className="mx-auto px-4 lg:px-6 flex items-center justify-between h-12 lg:h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/home">
                <img
                  className="h-6 lg:h-8"
                  src="https://firebasestorage.googleapis.com/v0/b/portals-7cdfd.appspot.com/o/assets%2FGroup%204.png?alt=media&token=f2cd29ae-5ae0-4f20-83ed-a16cbe1cda60"
                  alt="Workflow"
                />
              </Link>
            </div>

            <Heading className="ml-5">Home</Heading>
          </div>
        </div>
      </nav>

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
