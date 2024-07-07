import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './ui/Landing.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import FeedTweetListView, {feedTweetListLoader} from "./ui/feed/FeedTweetListView.jsx";
import NewTweetFormView, {newTweetFormAction} from "./ui/feed/NewTweetFormView.jsx";
import UserTweetListView, {userTweetListLoader} from "./ui/users/UserTweetListView.jsx";
import ProfileTweetListView, {profileTweetListLoader} from "./ui/profile/ProfileTweetListView.jsx";
import EditTweetFormView, {editTweetFormAction, editTweetFormLoader} from "./ui/profile/EditTweetFormView.jsx";
import AppLayout, {appLoader} from "./ui/app/AppLayout.jsx";
import LoginView from "./ui/login/LoginView.jsx";
import RegisterView from "./ui/register/RegisterView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/login",
    element: <LoginView/>
  },
  {
    path: "/register",
    element: <RegisterView/>
  },
  {
    path: "/app",
    loader: appLoader,
    element: <AppLayout/>,
    children: [
      {
        path: "/app/new",
        element: <NewTweetFormView/>,
        action: newTweetFormAction,
      },
      {
        path: "/app/feed",
        element: <FeedTweetListView/>,
        loader: feedTweetListLoader,
      },
      {
        path: "/app/profile",
        element: <ProfileTweetListView/>,
        loader: profileTweetListLoader,
      },
      {
        path: "/app/edit/:tweetId",
        element: <EditTweetFormView/>,
        loader: editTweetFormLoader,
        action: editTweetFormAction,
      },
      {
        path: "/app/users/:userId",
        element: <UserTweetListView/>,
        loader: userTweetListLoader,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
