
import {Navigation} from '@shopify/polaris';
import {HomeMinor, SettingsMinor, ProductsMinor} from '@shopify/polaris-icons';
import React from 'react';

function NavigationMenu({path}) {


  return (

      <Navigation location={`${path}`}>
        <Navigation.Section
          items={[
            {
              url: `/react-php-final`,
              label: 'Dashboard',
              icon: HomeMinor,
              exactMatch: true
            },
            {
              url: `/react-php-final/notifications`,
              label: 'Notifications',
              icon: ProductsMinor,
              selected: false,
              subNavigationItems: [
                {
                  url: `/react-php-final/notifications`,
                  disabled: false,
                  label: 'Email Notifications',
                },
                {
                  url: `/react-php-final/webpush-notifications`,
                  disabled: false,
                  label: 'WebPush Notifications',
                },
              ],
            },
            {
              url: `/react-php-final/templates`,
              label: 'Templates',
              icon: ProductsMinor,
              selected: false,
              subNavigationItems: [
                {
                  url: `/react-php-final/templates`,
                  disabled: false,
                  label: 'Email Template',
                },
                {
                  url: `/react-php-final/webpush-template`,
                  disabled: false,
                  label: 'WebPush Template',
                },
              ],
            },
            {
              url: `/react-php-final/settings`,
              label: 'Settings',
              icon: SettingsMinor
            },
          ]}
        />
      </Navigation>

  );
}
  
export default NavigationMenu;