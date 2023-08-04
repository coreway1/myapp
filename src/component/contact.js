import React from 'react';
import {Page, LegacyCard, Button, Frame} from '@shopify/polaris';
import NavigationMenu from "./navigation";

function Contact(){
    return (
        
        <Frame navigation={<NavigationMenu path="/contact" />}>
        <Page title="Example app" fullWidth>
      <LegacyCard sectioned>
        <Button onClick={() => alert('Button clicked!')}>Contact Example button</Button>
      </LegacyCard>
    </Page>
    </Frame>
    );
}
  
export default Contact;