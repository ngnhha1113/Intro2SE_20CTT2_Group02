import React from 'react';
import Section from '../components/Section';
import SectionList from '../components/SectionList';
import Delivery from '../components/Delivery';

export default function SectionsPage({ sections }) {
  const selectedSection = sections.find(({ id }) => activeId === id);
  return (
    <>
        <div className="rounded-tr-3xl rounded-br-3xl grow shadow-xl p-4 flex flex-col justify-between">
        <div className="grow shadow-xl p-4 flex flex-col justify-between" >
        <Section name={selectedSection.name} slots={selectedSection.slots} />
        <SectionList
          sections={sections}
          activeId={activeId}
          setActiveId={setActiveId}
        />
          </div>
      <div className="rounded-3xl p-4">
      <div className="p-4">
        <Delivery />
      </div>
    </>
  );
}
