import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import CreatePost from './pages/CreatePost';
import SignIn from './pages/SignIn';
import {PrivyProvider} from '@privy-io/react-auth';
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "faq",
    element: <FAQ />,
  },
  {
    path: "createpost",
    element: <CreatePost />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrivyProvider
      appId={"clu24q7110hs4c129dha4l0f3"}
      onSuccess={(user) => console.log(`User ${user.id} logged in!`)}
    >
    <RouterProvider router={router} />
    </PrivyProvider>
  </React.StrictMode>
);


