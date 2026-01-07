import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CountDownPage } from './screens/CountDown';
import { WebsitePage } from './screens/Website/WebsitePage';
import { ErrorPage } from './screens/Error/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WebsitePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/countdown',
    element: <CountDownPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
