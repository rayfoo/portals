import React from 'react';
import { useWindowDimensions } from '../../hooks';

type props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};

export function Drawer({ children, isOpen, header, footer, onClose }: props) {
  const { height } = useWindowDimensions();

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  document.body.classList.add('modal-open');

  return (
    <div className="fixed inset-0 overflow-hidden z-40 transition-all">
      <div className="absolute inset-0 transition-opacity" aria-hidden="true">
        <div
          className="absolute inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={handleClose}
        ></div>

        <div className="md:hidden">
          <section
            className="fixed inset-x-0 bottom-0 max-w-full flex z-50 px-0"
            style={{ height: 0.95 * height }}
            aria-labelledby="slide-over-heading"
          >
            <div className="relative w-screen w-full h-full">
              <div className="h-full flex flex-col bg-white shadow-xl rounded-t-2xl">
                {/* Heading Section */}
                {header}

                {/* Main Content */}
                <div className="p-4 mb-12 overflow-y-scroll touch-scroll h-full">
                  {children}
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 py-3 px-4 bg-white w-full shadow-invert rounded-bl-2xl flex flex-row justify-around">
                  {footer}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
