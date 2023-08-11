
import {Navigation} from '@shopify/polaris';
import {HomeMinor, SettingsMinor, ProductsMinor} from '@shopify/polaris-icons';
import React from 'react';

function NavigationMenu({path}) {


  return (

      <Navigation location={`${process.env.PUBLIC_URL}${path}`}>
        <Navigation.Section
          items={[
            {
              url: `${process.env.PUBLIC_URL}/`,
              label: 'Dashboard',
              icon: HomeMinor,
              exactMatch: true
            },
            {
              url: `${process.env.PUBLIC_URL}/notifications`,
              label: 'Notifications',
              icon: ProductsMinor,
              selected: false,
              subNavigationItems: [
                {
                  url: `${process.env.PUBLIC_URL}/notifications`,
                  disabled: false,
                  label: 'Email Notifications',
                },
                {
                  url: `${process.env.PUBLIC_URL}/webpush-notifications`,
                  disabled: false,
                  label: 'WebPush Notifications',
                },
              ],
            },
            {
              url: `${process.env.PUBLIC_URL}/templates`,
              label: 'Templates',
              icon: ProductsMinor,
              selected: false,
              subNavigationItems: [
                {
                  url: `${process.env.PUBLIC_URL}/templates`,
                  disabled: false,
                  label: 'Email Template',
                },
                {
                  url: `${process.env.PUBLIC_URL}/webpush-template`,
                  disabled: false,
                  label: 'WebPush Template',
                },
              ],
            },
            {
              url: `${process.env.PUBLIC_URL}/settings`,
              label: 'Settings',
              icon: SettingsMinor
            },
          ]}
        />
      </Navigation>

  );
}
  
export default NavigationMenu;