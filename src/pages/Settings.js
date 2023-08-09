import React from 'react';
import {Page, Layout, LegacyCard, Button, Frame, Banner} from '@shopify/polaris';
import NavigationMenu from "../component/navigation";

function Settings(){
    return (
        <Frame navigation={<NavigationMenu path="/templates" />}>
            <Page title="Settings">
      <Layout>
        <Layout.AnnotatedSection
          title="Account"
          description="In your Account,you can see and manage your plan settings."
        >
          <LegacyCard sectioned>

          <Banner
      title="You are currently on a trial period."
      status="info"
    >
    </Banner>
      <br></br>
              <Button url="/plans">See more info</Button>
          
          </LegacyCard>
        </Layout.AnnotatedSection>
      </Layout>
  
    </Page>
        </Frame>
    );
}
  
export default Settings;
