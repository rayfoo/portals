import React from 'react';
import { Container } from '../Elements/Container';
import { Link } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="bg-white fixed z-10 w-full shadow-sm">
        <div className="mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-12 lg:h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/home">
                  <img
                    className="h-8"
                    src="https://firebasestorage.googleapis.com/v0/b/portals-7cdfd.appspot.com/o/assets%2FGroup%204.png?alt=media&token=f2cd29ae-5ae0-4f20-83ed-a16cbe1cda60"
                    alt="Workflow"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto py-6 px-4 lg:px-6">
          <div className="mt-8 lg:mt-20">
            <div className="rounded-2xl w-72 py-8 px-3 bg-gray-200 fixed hidden lg:block">
              Sidebar
            </div>

            <Container>{children}</Container>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 p-4 bg-white w-full shadow-invert">
        Bottom
      </div>
    </div>
  );
}
