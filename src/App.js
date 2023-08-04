import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Notifications from './component/notifications';
import WebpushNotifications from './component/webpush-notifications';
import Templates from './component/templates';
import WebpushTemplate from './component/webpush-template';

import Contact from './component/contact';

import '@shopify/polaris/build/esm/styles.css';

import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

import './App.css';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
    <Router>

        <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/notifications' element={< Notifications />}></Route>
                <Route exact path='/templates' element={< Templates />}></Route>
                <Route exact path='/webpush-notifications' element={< WebpushNotifications />}></Route>
                <Route exact path='/webpush-template' element={< WebpushTemplate />}></Route>
                
                <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>

    </Router>
    </AppProvider>
  );
}

export default App;
