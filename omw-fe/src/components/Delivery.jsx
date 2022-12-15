import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const navItems = [
  { id: 0, text: 'Received' },
  { id: 1, text: 'Sent' },
  { id: 2, text: 'Expected' },
];

const items = {
  received: [{ id: 2, time: '20:00' }],
  sent: [
    { id: 0, time: '20:00' },
    { id: 1, time: '20:00' },
    { id: 2, time: '20:00' },
  ],
  expected: [
    { id: 0, time: '20:00' },
    { id: 2, time: '20:00' },
  ],
};

export default function Delivery() {
  const [activeId, setActiveId] = useState(navItems[0].id);
  const activeNavItem = navItems.find(({ id }) => id === activeId);
  return (
    <>
      <div className="flex gap-8">
        {navItems.map(({ id, text }) => (
          <div
            key={id}
            className={`${
              activeId === id ? 'bg-orange-200' : ''
            } cursor-pointer font-bold p-2 rounded-lg`}
            onClick={() => setActiveId(id)}
          >
            {text}
          </div>
        ))}
      </div>

      {items[activeNavItem.text.toLowerCase()].map(({ id, time }) => (
        <Item key={id} time={time} type={activeNavItem.text} />
      ))}
    </>
  );
}

function Item({ id, type, time }) {
  return (
    <div className="my-4 flex gap-4">
      <div className="h-12 w-12 rounded-xl bg-orange-400 flex items-center justify-center">
        <Icon icon="uil:box" className="text-3xl text-white" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="font-bold">Box {id}</div>
        <div className="text-sm">
          {type} {time}
        </div>
      </div>
    </div>
  );
}
