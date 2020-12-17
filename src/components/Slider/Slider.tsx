import React from 'react';
import { Transition } from '@headlessui/react';

type props = {
  children: React.ReactNode;
  isOpen: boolean;
  closeSlider: () => void;
};

export function Slider({ children, isOpen, closeSlider }: props) {
  return (
    <>
      <Transition show={isOpen}>
        <div
          className="fixed inset-0 overflow-hidden z-40 transition-all"
          onClick={closeSlider}
        >
          <div
            className="absolute inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={closeSlider}
          ></div>
        </div>
      </Transition>

      <div className="md:hidden">
        <Transition show={isOpen}>
          <section
            className="fixed inset-x-0 bottom-0 max-w-full flex z-50 px-0"
            style={{ height: 0.9 * window.innerHeight }}
            aria-labelledby="slide-over-heading"
          >
            <div className="relative w-screen w-full h-full">
              <div className="h-full flex flex-col p-6 bg-white shadow-xl rounded-t-2xl">
                {children}
              </div>
            </div>
          </section>
        </Transition>
      </div>

      <div className="hidden md:contents">
        <Transition show={isOpen}>
          <section
            className="fixed inset-y-0 right-0 pl-10 max-w-full flex z-50 py-0"
            aria-labelledby="slide-over-heading"
          >
            <div className="relative w-screen max-w-xl h-full">
              <div className="h-screen flex flex-col p-8 bg-white shadow-xl rounded-l-2xl">
                {children}
              </div>
            </div>
          </section>
        </Transition>
      </div>
    </>
  );
}
