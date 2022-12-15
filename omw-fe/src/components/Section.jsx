import React from 'react';
import Slot from './Slot';

export default function Section({ name, slots }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <div className={`flex flex-wrap gap-4 justify-start p-4`}>
          {slots.map(({ id, isLoaded, status }) => {
            return (
              <Slot key={id} id={id} isLoaded={isLoaded} status={status} />
            );
          })}
        </div>
      </div>
      <div className="flex p-4 gap-20">
        <div className="flex items-center gap-2">
          <Slot isLoaded={false} />{' '}
          {slots.filter(({ isLoaded }) => !isLoaded).length} empty shelves
        </div>
        <div className="flex items-center gap-2">
          <Slot isLoaded={true} />{' '}
          {slots.filter(({ isLoaded }) => isLoaded).length} loaded shelves
        </div>
      </div>
    </div>
  );
}
