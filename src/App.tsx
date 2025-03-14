import './App.css';
import AuthLayout from './component/AuthLayout/AuthLayout';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from './component/MasterLayout/MasterLayout';
import Home from './component/Home/Home';
import Profile from './component/Profile/Profile';
import User from './component/User/User';
import AddUser from './component/AddUser/AddUser';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './component/ProtedRout/ProtedRout';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
      ],
    },
    {
      path: "dashboard",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },

        // 🔹 هنا يتم استخدام ProtectedRoute بشكل صحيح
        {
          element: <ProtectedRoute />, 
          children: [
            { path: "profile", element: <Profile /> },
            { path: "user", element: <User /> },
            { path: "adduser", element: <AddUser /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
