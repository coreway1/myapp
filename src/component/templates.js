import React from 'react';
import {Page, LegacyCard, Button, Frame} from '@shopify/polaris';
import NavigationMenu from "./navigation";

function Templates(){
    return (
        
        <Frame navigation={<NavigationMenu path="/templates" />}>
        <Page title="Example app" fullWidth>
      <LegacyCard sectioned>
        <Button onClick={() => alert('Button clicked!')}>Contact Example button</Button>
      </LegacyCard>
    </Page>
    </Frame>
    );
}
  
export default Templates;