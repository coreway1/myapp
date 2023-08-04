
import {Navigation} from '@shopify/polaris';
import {HomeMinor, OrdersMinor, ProductsMinor} from '@shopify/polaris-icons';
import React from 'react';

function NavigationMenu({path}) {


  return (

      <Navigation location={path}>
        <Navigation.Section
          items={[
            {
              url: '/',
              label: 'Dashboard',
              icon: HomeMinor,
              exactMatch: true
            },
            {
              url: '/notifications',
              label: 'Notifications',
              icon: OrdersMinor,
              selected: false,
              subNavigationItems: [
                {
                  url: '/notifications',
                  disabled: false,
                  label: 'Email',
                },
                {
                  url: '/webpush-notifications',
                  disabled: false,
                  label: 'WebPush',
                },
              ],
            },
            {
              url: '/templates',
              label: 'Templates',
              icon: ProductsMinor,
              selected: false,
              subNavigationItems: [
                {
                  url: '/templates',
                  disabled: false,
                  label: 'Email Template',
                },
                {
                  url: '/webpush-template',
                  disabled: false,
                  label: 'WebPush Template',
                },
              ],
            },
          ]}
        />
      </Navigation>

  );
}
  
export default NavigationMenu;