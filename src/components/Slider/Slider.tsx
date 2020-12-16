import React from 'react';
import { Transition } from '@headlessui/react';

type props = {
  children: React.ReactNode;
  openState: boolean;
  closeSlider: () => void;
};

export function Slider({ children, openState = false, closeSlider }: any) {
  const { isOpen } = openState;

  return (
    //  <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      className={`fixed inset-0 overflow-hidden ${isOpen ? null : 'invisible'}`}
      style={{ zIndex: 100 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Transition
          show={isOpen}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={closeSlider}
          ></div>

          <section
            className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
            aria-labelledby="slide-over-heading"
          >
            <Transition
              show={isOpen}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-xl h-full">
                <div className="h-full flex flex-col p-4 bg-white shadow-xl overflow-y-scroll">
                  {children}
                </div>
              </div>
            </Transition>
          </section>
        </Transition>
      </div>
    </div>
  );
}
