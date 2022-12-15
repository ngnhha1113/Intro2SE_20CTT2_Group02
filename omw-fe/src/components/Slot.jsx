import React from 'react';
import { Popover } from 'antd';
import SlotDetail from './SlotDetail';

export default function Slot({ isLoaded, id, status }) {
  return (
    <Popover content={<SlotDetail id={id} status={status} />}>
      <div
        className={`h-8 w-8 rounded-lg ${
          isLoaded ? 'bg-orange-400' : 'bg-orange-200'
        }`}
      ></div>
    </Popover>
  );
}
