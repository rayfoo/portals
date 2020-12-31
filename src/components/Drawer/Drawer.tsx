import React, { useEffect } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
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
  const targetScrollRef = React.createRef<any>();

  useEffect(() => {
    let targetScrollEl: any = null;
    targetScrollEl = targetScrollRef.current;

    if (isOpen) {
      disableBodyScroll(targetScrollEl);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [isOpen, targetScrollRef]);

  const handleClose = () => {
    clearAllBodyScrollLocks();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden z-40 transition-all">
      <div className="absolute inset-0 transition-opacity" aria-hidden="true">
        <div
          className="absolute inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={handleClose}
        ></div>

        <div className="lg:hidden">
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
                <div
                  className="mb-12 overflow-y-auto touch-scroll h-full"
                  ref={targetScrollRef}
                >
                  {children}
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 bg-white w-full shadow-invert rounded-bl-2xl">
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
