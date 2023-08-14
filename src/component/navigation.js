
import {Navigation} from '@shopify/polaris';
import {HomeMinor, SettingsMinor, ProductsMinor} from '@shopify/polaris-icons';
import React from 'react';

function NavigationMenu({path}) {


  return (

      <Navigation location={`${path}`}>
        <Navigation.Section
          items={[
            {
              url: `/`,
              label: 'Dashboard',
              icon: HomeMinor,
              exactMatch: true
            },
            {
              url: `/notifications`,
              label: 'Notifications',
              icon: ProductsMinor,
              selected: false,
              subNavigationItems: [
                {
                  url: `/notifications`,
                  disabled: false,
                  label: 'Email Notifications',
                },
                {
                  url: `/webpush-notifications`,
                  disabled: false,
                  label: 'WebPush Notifications',
                },
              ],
            },
            {
              url: `/templates`,
              label: 'Templates',
              icon: ProductsMinor,
              selected: false,
              subNavigationItems: [
                {
                  url: `/templates`,
                  disabled: false,
                  label: 'Email Template',
                },
                {
                  url: `/webpush-template`,
                  disabled: false,
                  label: 'WebPush Template',
                },
              ],
            },
            {
              url: `/settings`,
              label: 'Settings',
              icon: SettingsMinor
            },
          ]}
        />
      </Navigation>

  );
}
  
export default NavigationMenu;