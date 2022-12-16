import React from 'react';

const navItems = [{ id: 0, icon: 'uil:home-alt', route: '/', text: 'Home' }];

export default function SettingsPage() {
  return (
    <div>
      {navItems.map(({ id, icon, route, text }) => (
        <div key={id}>{text}</div>
      ))}
    </div>
  );
}
