import React from 'react';
import { Home, Compass, Grid } from 'react-feather';
import { Link } from 'react-router-dom';

import { Avatar } from '../Elements/Avatar';
import { useRouter } from '../../hooks';

export function MobileNav() {
  const activeStyles = 'bg-blue-200';

  return (
    <div className="fixed bottom-0 left-0 py-2 px-6 bg-white w-full shadow-invert">
      <div className="flex flex-row justify-between content-center">
        <NavItem
          linkTo="/home"
          activeClassName={activeStyles}
          activeComponent={
            <Home size={24} strokeWidth={1.5} color="#1D4ED8" fill="#1D4ED8" />
          }
        >
          <Home size={24} strokeWidth={1.5} color="#6B7280" />
        </NavItem>
        <NavItem
          linkTo="/circles"
          activeClassName={activeStyles}
          activeComponent={
            <Grid size={24} strokeWidth={1.5} color="#1D4ED8" fill="#1D4ED8" />
          }
        >
          <Grid size={24} strokeWidth={1.5} color="#6B7280" />
        </NavItem>
        <NavItem
          linkTo="/explore"
          activeClassName={activeStyles}
          activeComponent={
            <Compass
              size={24}
              strokeWidth={1.5}
              color="#BFDBFE"
              fill="#1D4ED8"
            />
          }
        >
          <Compass size={24} strokeWidth={1.5} color="#6B7280" />
        </NavItem>
        <NavItem linkTo="/profile" activeClassName={activeStyles}>
          <Avatar
            url={
              'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt="user avatar"
          />
        </NavItem>
      </div>
    </div>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  linkTo: string;
  activeClassName?: string;
  activeComponent?: any;
};

function NavItem({
  children,
  linkTo,
  activeClassName = '',
  activeComponent,
}: NavItemProps) {
  const { getPath } = useRouter();
  const isActive = getPath() === linkTo;

  return (
    <Link to={linkTo}>
      <div
        className={`flex flex-col place-items-center place-content-center m-0 py-2 px-2.5 rounded-xl ${
          isActive && activeClassName
        }`}
      >
        {isActive && activeComponent ? activeComponent : children}
      </div>
    </Link>
  );
}
