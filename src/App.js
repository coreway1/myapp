import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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


import {
  AppBridgeProvider,
  PolarisProvider
} from "./component";
import Link from "./Link";
function App() {

  const [shopid, setshopid] = useState(false);
  const [installeddate, setinstalleddate] = useState(false);
  
  const getshopid = async (shop) => {
    if(shop){
      const rawResponse = await fetch('https://app.mobivogue.com/react-php-final/getshopid.php?shop='+shop, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      const content = await rawResponse.json();
      setshopid(content.shopid);
      setinstalleddate(content.installeddate);
    }
  };
  
  useEffect(() => {
    getshopid(new URLSearchParams(window.location.search).get('shop'));   
  }, []); 





  return (
    <PolarisProvider linkComponent={Link}>
    <BrowserRouter>
      <AppBridgeProvider>
  
  <h1>Test</h1>
  
      </AppBridgeProvider>
    </BrowserRouter>
  </PolarisProvider>
  );
}

export default App;
