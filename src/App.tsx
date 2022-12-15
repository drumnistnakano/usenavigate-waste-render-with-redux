import './styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Team from './routes/team';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/team',
    element: <Team />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
