import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation({ navItems }) {
    const [activeId, setActiveId] = useState(navItems[0].id);
    const location = useLocation();
    const [activeId, setActiveId] = useState(location.pathname);
  return (
    <>
      <div className="shadow-xl w-20 flex flex-col items-center justify-center h-full bg-slate-200 gap-4">
        {navItems.map(({ id, icon, route }) => (
          <Link key={id} to={route}>
            <div
              className={`${
                activeId === id ? 'bg-slate-50' : ''
                        } ${activeId === route ? 'bg-slate-50' : ''}
                hover:bg-slate-50 w-14 h-14 flex items-center justify-center rounded-xl cursor-pointer`}
                onClick={() => setActiveId(id)}
                onClick={() => setActiveId(route)}
            >
              <Icon
                icon={icon}
                className={`text-4xl ${
                    activeId === id ? 'text-slate-600' : 'text-slate-300'
                    activeId === route ? 'text-slate-600' : 'text-slate-300'
                }`}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}


