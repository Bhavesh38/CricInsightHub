import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import { isAuthenticated } from './utilities/authentication';
import PrivateRoute from './PrivateRoute';
import Service from './components/services/Service';
import NoNavbarLayout from './NoNavbarLayout';
import NavbarLayout from './NavbarLayout';
import CricHub from './components/services/cricHub/CricHub';
import CricHubLayout from './CricHubLayout';
import Chat from './components/services/cricHub/chatting/Chat';
import Profile from './components/Profile/Profile';
import UserAllPosts from './components/Profile/UserAllPosts';
import { useDispatch } from 'react-redux';
import { getUserDetailsAction } from './actions/profileActions';
import Notification from "./components/Notifications/Notification"
import CurrentPost from './components/services/cricHub/cricHubComponents/cricPosts/CurrentPost';
import UserChatDetails from './components/services/cricHub/chatting/UserChatDetails';
import Auction from './components/services/auction/Auction';




// Define a layout component that excludes the Navbar
// const NoNavbarLayout = ({ children }) => <>{children}</>;


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailsAction());
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarLayout><Home /></NavbarLayout>} />
        <Route path="/login" element={<NoNavbarLayout><Login /></NoNavbarLayout>} />
        <Route path="/register" element={<NoNavbarLayout ><Register /></NoNavbarLayout>} />
        <Route path="/services" element={<NavbarLayout ><Service /></NavbarLayout>} />
        <Route path="/auction" element={<NavbarLayout ><Auction /></NavbarLayout>} />
        <Route path="/crichub" element={<CricHubLayout ><CricHub /></CricHubLayout>} />
        <Route path="/chat" element={<CricHubLayout ><Chat /></CricHubLayout>} />
        <Route path="/chat/user/:id" element={<CricHubLayout><UserChatDetails /></CricHubLayout>} />
        <Route path="/notification" element={<CricHubLayout ><Notification /></CricHubLayout>} />
        <Route path="/profile/:id" element={<CricHubLayout ><Profile /></CricHubLayout>} />
        <Route path="/userallposts" element={<CricHubLayout ><UserAllPosts /></CricHubLayout>} />
        <Route path="/post/:id" element={<CricHubLayout ><CurrentPost /></CricHubLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
