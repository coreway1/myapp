import React from 'react';
import {Page, LegacyCard, Button, Frame} from '@shopify/polaris';
import NavigationMenu from "./navigation";

function Home(){
    return (
        
        <Frame navigation={<NavigationMenu path="/" />}>
        <Page title="Example app" fullWidth>
      <LegacyCard sectioned>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </LegacyCard>
    </Page>
    </Frame>
    );
}
  
export default Home;