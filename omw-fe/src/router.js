import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import SectionsPage from './pages/SectionsPage';
import SettingsPage from './pages/SettingsPage';

const sections = [
  {
    id: 1,
    name: 'Section 001',
    used: 0,
    received: 2,
    sent: 4,
    expected: 5,
    slots: [
      { id: 1, isLoaded: true, status: 'Delivered' },
      { id: 2, isLoaded: false },
      { id: 3, isLoaded: true },
      { id: 4, isLoaded: false },
      { id: 5, isLoaded: true },
      { id: 6, isLoaded: false },
      { id: 7, isLoaded: true },
      { id: 8, isLoaded: false },
      { id: 9, isLoaded: true },
      { id: 10, isLoaded: false },
      { id: 11, isLoaded: true },
      { id: 12, isLoaded: false },
      { id: 13, isLoaded: true },
      { id: 14, isLoaded: false },
      { id: 15, isLoaded: true },
      { id: 16, isLoaded: false },
      { id: 17, isLoaded: true },
      { id: 18, isLoaded: false },
      { id: 19, isLoaded: true },
    ],
  },
  {
    id: 2,
    name: 'Section 002',
    used: 10,
    received: 2,
    sent: 4,
    expected: 5,
    slots: [
      { id: 1, isLoaded: true },
      { id: 2, isLoaded: false },
      { id: 3, isLoaded: true },
      { id: 4, isLoaded: false },
      { id: 5, isLoaded: true },
      { id: 6, isLoaded: false },
      { id: 7, isLoaded: true },
      { id: 8, isLoaded: false },
      { id: 9, isLoaded: true },
      { id: 10, isLoaded: false },
      { id: 11, isLoaded: true },
      { id: 12, isLoaded: false },
      { id: 13, isLoaded: true },
      { id: 14, isLoaded: false },
      { id: 15, isLoaded: true },
      { id: 16, isLoaded: false },
      { id: 17, isLoaded: true },
      { id: 18, isLoaded: false },
      { id: 19, isLoaded: true },
    ],
  },
  {
    id: 3,
    name: 'Section 003',
    used: 23,
    received: 2,
    sent: 4,
    expected: 5,
    slots: [
      { id: 1, isLoaded: true },
      { id: 2, isLoaded: false },
      { id: 3, isLoaded: true },
      { id: 4, isLoaded: false },
      { id: 5, isLoaded: true },
      { id: 6, isLoaded: false },
      { id: 7, isLoaded: true },
      { id: 8, isLoaded: false },
      { id: 9, isLoaded: true },
      { id: 10, isLoaded: false },
      { id: 11, isLoaded: true },
      { id: 12, isLoaded: false },
      { id: 13, isLoaded: true },
      { id: 14, isLoaded: false },
      { id: 15, isLoaded: true },
      { id: 16, isLoaded: false },
      { id: 17, isLoaded: true },
      { id: 18, isLoaded: false },
      { id: 19, isLoaded: true },
    ],
  },
  {
    id: 4,
    name: 'Section 004',
    used: 75,
    received: 2,
    sent: 4,
    expected: 5,
    slots: [
      { id: 1, isLoaded: true },
      { id: 2, isLoaded: false },
      { id: 3, isLoaded: true },
      { id: 4, isLoaded: false },
      { id: 5, isLoaded: true },
      { id: 6, isLoaded: false },
      { id: 7, isLoaded: true },
      { id: 8, isLoaded: false },
      { id: 9, isLoaded: true },
      { id: 10, isLoaded: false },
      { id: 11, isLoaded: true },
      { id: 12, isLoaded: false },
      { id: 13, isLoaded: true },
      { id: 14, isLoaded: false },
      { id: 15, isLoaded: true },
      { id: 16, isLoaded: false },
      { id: 17, isLoaded: true },
      { id: 18, isLoaded: false },
      { id: 19, isLoaded: true },
    ],
  },
  {
    id: 5,
    name: 'Section 005',
    used: 30,
    received: 2,
    sent: 4,
    expected: 5,
    slots: [
      { id: 1, isLoaded: true },
      { id: 2, isLoaded: false },
      { id: 3, isLoaded: true },
      { id: 4, isLoaded: false },
      { id: 5, isLoaded: true },
      { id: 6, isLoaded: false },
      { id: 7, isLoaded: true },
      { id: 8, isLoaded: false },
      { id: 9, isLoaded: true },
      { id: 10, isLoaded: false },
      { id: 11, isLoaded: true },
      { id: 12, isLoaded: false },
      { id: 13, isLoaded: true },
      { id: 14, isLoaded: false },
      { id: 15, isLoaded: true },
      { id: 16, isLoaded: false },
      { id: 17, isLoaded: true },
      { id: 18, isLoaded: false },
      { id: 19, isLoaded: true },
    ],
  },
  {
    id: 6,
    name: 'Section 006',
    used: 50,
    received: 2,
    sent: 4,
    expected: 5,
    slots: [
      { id: 1, isLoaded: true },
      { id: 2, isLoaded: false },
      { id: 3, isLoaded: true },
      { id: 4, isLoaded: false },
      { id: 5, isLoaded: true },
      { id: 6, isLoaded: false },
      { id: 7, isLoaded: true },
      { id: 8, isLoaded: false },
      { id: 9, isLoaded: true },
      { id: 10, isLoaded: false },
      { id: 11, isLoaded: true },
      { id: 12, isLoaded: false },
      { id: 13, isLoaded: true },
      { id: 14, isLoaded: false },
      { id: 15, isLoaded: true },
      { id: 16, isLoaded: false },
      { id: 17, isLoaded: true },
      { id: 18, isLoaded: false },
      { id: 19, isLoaded: true },
    ],
  },
  {
    id: 7,
    name: 'Section 007',
    used: 100,
    received: 2,
    sent: 10,
    expected: 5,
    slots: [
      { id: 1, isLoaded: true },
      { id: 2, isLoaded: false },
      { id: 3, isLoaded: true },
      { id: 4, isLoaded: false },
      { id: 5, isLoaded: true },
      { id: 6, isLoaded: false },
      { id: 7, isLoaded: true },
      { id: 8, isLoaded: false },
      { id: 9, isLoaded: true },
      { id: 10, isLoaded: false },
      { id: 11, isLoaded: true },
      { id: 12, isLoaded: false },
      { id: 13, isLoaded: true },
      { id: 14, isLoaded: false },
      { id: 15, isLoaded: true },
      { id: 16, isLoaded: false },
      { id: 17, isLoaded: true },
      { id: 18, isLoaded: false },
      { id: 19, isLoaded: true },
    ],
  },
  {
    id: 8,
    name: 'Section 008',
    used: 50,
    received: 2,
    sent: 4,
    expected: 5,
    slots: [
      { id: 1, isLoaded: true },
      { id: 2, isLoaded: false },
      { id: 3, isLoaded: true },
      { id: 4, isLoaded: false },
      { id: 5, isLoaded: true },
      { id: 6, isLoaded: false },
      { id: 7, isLoaded: true },
      { id: 8, isLoaded: false },
      { id: 9, isLoaded: true },
      { id: 10, isLoaded: false },
      { id: 17, isLoaded: true },
      { id: 18, isLoaded: false },
      { id: 19, isLoaded: true },
    ],
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/sections',
        element: <SectionsPage sections={sections} />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
