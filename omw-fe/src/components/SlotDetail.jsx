import React from 'react';

export default function SlotDetail({ id, status }) {
  return (
    <>
      <div className="font-bold">Box {id}</div>
      <div>{status}</div>
    </>
  );
}
