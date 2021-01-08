import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Body, Byline } from '../Elements/Text';
import { PrimaryButton } from '../Elements/Button';

export function CommunityCard() {
  return (
    <Link to="/circles/1">
      <div className="border border-gray-200 rounded-2xl mb-4 relative">
        <div
          className="absolute top-0 left-0 px-4 z-0 h-12 w-full bg-cover bg-center rounded-t-2xl"
          style={{
            backgroundImage:
              "url('https://previews.123rf.com/images/nataliakuprova/nataliakuprova1804/nataliakuprova180400008/99552618-hand-drawn-black-and-white-abstract-confetti-seamless-pattern-pop-art-fashion-festival-abstract-back.jpg')",
          }}
        >
          <div className="w-full text-right">
            <PrimaryButton size="xs" roundedFull className="relative top-2">
              Join
            </PrimaryButton>
          </div>
        </div>

        <div className="flex flex-row pt-8 px-4 items-end">
          <div
            className="w-12 h-12 z-1 rounded-xl ring ring-white bg-gray-400 bg-cover bg-center flex-shrink-0"
            style={{
              backgroundImage: 'url("https://reactjs.org/logo-og.png")',
            }}
          />
          <div className="ml-2 z-1 flex-grow">
            <Heading clickable className="leading-none inline-block">
              ReactJS
            </Heading>
            <Heading clickable className="inline-block mx-1">
              &#183;
            </Heading>
            <Byline clickable className="inline-block">
              300 Members
            </Byline>
          </div>
        </div>

        <Body clickable className="p-4 pt-2">
          Vivamus vel efficitur odio, ut feugiat libero. Aliquam elit mi,
          condimentum in mattis et, malesuada in diam. Sed pellentesque, libero
          vel tincidunt varius, metus metus maximus est, ut tempus sapien nunc
          nec dolor. Vestibulum ante ipsum
        </Body>
      </div>
    </Link>
  );
}
