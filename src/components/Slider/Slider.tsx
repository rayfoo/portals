import React from 'react';
import { Transition } from '@headlessui/react';
import {
  CornerUpLeft,
  XCircle,
  Bookmark,
  Heart,
  MessageCircle,
  AlertOctagon,
} from 'react-feather';
import { Heading, Byline } from '../Elements/Text';
import { useWindowDimensions } from '../utils';
import { context } from '../../store';

type props = {
  children: React.ReactNode;
};

export function Slider({ children }: props) {
  const { state, dispatch } = React.useContext(context);

  const closeSlider = () => dispatch({ type: 'slider/close', payload: null });

  const { height } = useWindowDimensions();

  return (
    <Transition show={state.slider.isOpen}>
      <div className="fixed inset-0 overflow-hidden z-40 transition-all">
        <div className="absolute inset-0 transition-opacity" aria-hidden="true">
          <div
            className="absolute inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={closeSlider}
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
                  <div className="p-4 bg-blue-600 rounded-t-2xl flex flex-row">
                    {state.currentPost > 0 && (
                      <CornerUpLeft
                        color="white"
                        size={24}
                        className="mr-2 cursor-pointer"
                      />
                    )}
                    <Heading invert>Thread</Heading>
                    <Bookmark
                      color="white"
                      size={24}
                      className="ml-auto cursor-pointer"
                    />
                    <XCircle
                      color="white"
                      size={24}
                      className="ml-2 cursor-pointer"
                      onClick={closeSlider}
                    />
                  </div>

                  {/* Main Content */}
                  <div className="p-4 mb-12 overflow-y-scroll touch-scroll h-full">
                    {children}
                  </div>

                  {/* Footer */}
                  <div className="absolute bottom-0 left-0 py-3 px-4 bg-white w-full shadow-invert rounded-bl-2xl flex flex-row justify-around">
                    <span className="flex flex-row items-center">
                      <Heart
                        className="mr-1"
                        color="#111827"
                        size={14}
                        strokeWidth={3}
                      />
                      <Byline clickable styles="text-gray-500 font-medium">
                        Upvote
                      </Byline>
                    </span>
                    <span className="flex flex-row items-center">
                      <MessageCircle
                        className="mr-1"
                        color="#111827"
                        size={14}
                        strokeWidth={3}
                      />
                      <Byline clickable styles="text-gray-500 font-medium">
                        Reply
                      </Byline>
                    </span>
                    <span className="flex flex-row items-center">
                      <AlertOctagon
                        className="mr-1"
                        color="#111827"
                        size={14}
                        strokeWidth={3}
                      />
                      <Byline clickable styles="text-gray-500 font-medium">
                        Report
                      </Byline>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="hidden md:contents">
            <section
              className="fixed inset-y-0 right-0 pl-10 max-w-full flex z-50 py-0"
              aria-labelledby="slide-over-heading"
            >
              <div className="relative w-screen max-w-xl h-full">
                <div className="h-screen flex flex-col bg-white shadow-xl rounded-l-2xl">
                  {/* Heading Section */}
                  <div className="p-4 bg-blue-600 rounded-tl-2xl flex flex-row">
                    {state.currentPost > 0 && (
                      <CornerUpLeft
                        color="white"
                        size={24}
                        className="mr-2 cursor-pointer"
                      />
                    )}
                    <Heading invert>Thread</Heading>
                    <Bookmark
                      color="white"
                      size={24}
                      className="ml-auto cursor-pointer"
                    />
                    <XCircle
                      color="white"
                      size={24}
                      className="ml-2 cursor-pointer"
                      onClick={closeSlider}
                    />
                  </div>

                  {/* Main Content */}
                  <div className="p-4 mb-12 overflow-y-scroll h-full">
                    {children}
                  </div>

                  {/* Footer */}
                  <div className="absolute bottom-0 left-0 py-3 px-4 bg-white w-full shadow-invert rounded-bl-2xl flex flex-row justify-around cursor-pointer">
                    <span className="flex flex-row items-center">
                      <Heart
                        className="mr-1"
                        color="#6B7280"
                        size={14}
                        strokeWidth={3}
                      />
                      <Byline clickable styles="text-gray-500 font-medium">
                        Upvote
                      </Byline>
                    </span>
                    <span className="flex flex-row items-center">
                      <MessageCircle
                        className="mr-1"
                        color="#6B7280"
                        size={14}
                        strokeWidth={3}
                      />
                      <Byline clickable styles="text-gray-500 font-medium">
                        Reply
                      </Byline>
                    </span>
                    <span className="flex flex-row items-center">
                      <AlertOctagon
                        className="mr-1"
                        color="#6B7280"
                        size={14}
                        strokeWidth={3}
                      />
                      <Byline clickable styles="text-gray-500 font-medium">
                        Report
                      </Byline>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Transition>
  );
}
