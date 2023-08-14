import React, { useState, useCallback, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Notificationsview from "./pages/Notificationsview";
import WebpushNotifications from './pages/WebpushNotifications';
import Templates from './pages/Templates';
import WebpushTemplate from './pages/WebpushTemplate';
import Settings from './pages/Settings';
import Plans from './pages/Plans';
import '@shopify/polaris/build/esm/styles.css';
import './App.css';
 
function App() {
  


  return (

         <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>


<Route exact path={`/`} element={< Dashboard />}></Route>
                <Route exact path={`/notifications`} element={< Notifications />}></Route>
                <Route path={`/notifications/:id`} element={<Notificationsview />} />
                <Route exact path={`/webpush-notifications`} element={< WebpushNotifications />}></Route>
                <Route exact path={`/templates`} element={< Templates />}></Route>
                <Route exact path={`/webpush-template`} element={< WebpushTemplate />}></Route>
                <Route exact path={`/settings`} element={< Settings />}></Route>
                <Route exact path={`/plans`} element={< Plans />}></Route>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
