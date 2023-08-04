import React from 'react';
import {Page, LegacyCard, Button, Frame} from '@shopify/polaris';
import NavigationMenu from "./navigation";

function WebpushNotifications(){
    return (
        
        <Frame navigation={<NavigationMenu path="/webpush-notifications" />}>
        <Page title="Example app" fullWidth>
      <LegacyCard sectioned>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </LegacyCard>
    </Page>
    </Frame>
    );
}
  
export default WebpushNotifications;