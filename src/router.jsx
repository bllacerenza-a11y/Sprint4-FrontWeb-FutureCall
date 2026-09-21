import { createBrowserRouter } from 'react-router';
import RootLayout from './layouts/RootLayout.jsx';
import Home from './pages/Home.jsx';
import Resources from './pages/Resources.jsx';
import ResourceDetail from './pages/ResourceDetail.jsx';
import Team from './pages/Team.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import NotFound from './pages/NotFound.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'recursos', element: <Resources /> },
      { path: 'recursos/:id', element: <ResourceDetail /> },
      { path: 'equipe', element: <Team /> },
      { path: 'login', element: <Login /> },
      {
        path: 'painel',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
