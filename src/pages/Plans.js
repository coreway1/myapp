import {
    Page,
    Layout,
    LegacyCard,
    ResourceList,
    Thumbnail,
    Text,
    CalloutCard,
    List,
    Badge, 
    ResourceItem, 
    Frame,
  } from '@shopify/polaris';
  

  import { useState, useCallback, useEffect } from "react";  
  import {useNavigate} from "react-router-dom";
  import NavigationMenu from "../component/navigation";
  
  export default function Planstwo({ shop, shopid }) {
      const navigate = useNavigate();
      const [activeplan, setactiveplan] = useState(false);
  
      const getplan = async (shop) => {

        //createplans.php
        const response = await fetch("https://app.mobivogue.com/react-php-final/getplans.php?shop="+shop);
        let dataResult = await response.json();

        setactiveplan(dataResult.name);
      };
      const activePlan = useCallback( async (index) => {
        const response = await fetch("https://app.mobivogue.com/react-php-final/createplans.php?shop="+shop+"&index="+index);
        let dataResult = await response.json();

        const { recurring_application_charge } = dataResult;
        console.log(recurring_application_charge.confirmation_url);
        //navigate(recurring_application_charge.confirmation_url);
      },[]);
      useEffect(() => {
        if(shop) getplan(shop);
      }, [shop]);
  

    return (
        <Frame navigation={<NavigationMenu path="/settings" />}>
      <Page title="Plans" backAction={{content: 'Settings', url: '/settings'}}>
        <Layout>

          <Layout.Section oneThird>
            <LegacyCard title="Lite" 
                        actions={[{content: activeplan == "Lite" ? <Badge status="success">Active</Badge> : ""}]} 
                        primaryFooterAction={{content: activeplan != "Basic"?"Active":"Activated", onAction: ()=>{{
                        if(activeplan != "Basic") activePlan(0);
                    }} } }>
              <LegacyCard.Section>
                <Text variant="heading2xl" as="h3">
                    $ 19.00<span style={{fontSize: "22px"}}> / month</span>
                </Text>
              </LegacyCard.Section>
              <LegacyCard.Section title="What's included on Lite">
                <List type="number">
                    <List.Item>
                      <b>Unlimited notification registrations</b>
                    </List.Item>
                    <List.Item>
                       <b>Email notification</b>
                    </List.Item>
                    <List.Item>
                       <b>Webpush notification</b>
                    </List.Item>
                    <List.Item>
                       <b>50 Email/Push notifications sent each month</b>
                    </List.Item>                    
                    <List.Item>
                       <b>Activity Reports</b>
                    </List.Item>
                    <List.Item>
                       <b>Template Customization</b>
                    </List.Item>
                </List>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section oneThird>
            <LegacyCard title="Startup"
              actions={[{content: activeplan == "Standerd" ? <Badge status="success">Active</Badge> : ""}]}
              primaryFooterAction={{content: activeplan != "Standerd"?"Active":"Activated", onAction: ()=>{{
                if(activeplan != "Standerd") activePlan(1);
               }} }}>
              <LegacyCard.Section>
                <Text variant="heading2xl" as="h3">
                    $ 29.00<span style={{fontSize: "22px"}}> / month</span>
                </Text>
              </LegacyCard.Section>
              <LegacyCard.Section title="What's included on Startup">
              <List type="number">
                    <List.Item>
                      <b>Unlimited notification registrations</b>
                    </List.Item>
                    <List.Item>
                       <b>Email notification</b>
                    </List.Item>
                    <List.Item>
                       <b>Webpush notification</b>
                    </List.Item>
                    <List.Item>
                       <b>50 Email/Push notifications sent each month</b>
                    </List.Item>                    
                    <List.Item>
                       <b>Activity Reports</b>
                    </List.Item>
                    <List.Item>
                       <b>Template Customization</b>
                    </List.Item>
                </List>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section oneThird>
            <LegacyCard title="Small business"
              actions={[{content: activeplan == "Advanced" ? <Badge status="success">Active</Badge> : ""}]}
              primaryFooterAction={{content: activeplan != "Advanced"?"Active":"Activated", onAction: ()=>{{
                if(activeplan != "Advanced") activePlan(2);
               }} }}>
              <LegacyCard.Section>
                <Text variant="heading2xl" as="h3">
                    $ 49.00<span style={{fontSize: "22px"}}> / month</span>
                </Text>
              </LegacyCard.Section>
              <LegacyCard.Section title="What's included on Small business">
              <List type="number">
                    <List.Item>
                      <b>Unlimited notification registrations</b>
                    </List.Item>
                    <List.Item>
                       <b>Email notification</b>
                    </List.Item>
                    <List.Item>
                       <b>Webpush notification</b>
                    </List.Item>
                    <List.Item>
                       <b>50 Email/Push notifications sent each month</b>
                    </List.Item>                    
                    <List.Item>
                       <b>Activity Reports</b>
                    </List.Item>
                    <List.Item>
                       <b>Template Customization</b>
                    </List.Item>
                </List>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
            <Layout.Section oneThird>
            <LegacyCard title="Medium store"
              actions={[{content: activeplan == "Advanced" ? <Badge status="success">Active</Badge> : ""}]}
              primaryFooterAction={{content: activeplan != "Advanced"?"Active":"Activated", onAction: ()=>{{
                if(activeplan != "Advanced") activePlan(3);
               }} }}>
              <LegacyCard.Section>
                <Text variant="heading2xl" as="h3">
                    $ 69.00<span style={{fontSize: "22px"}}> / month</span>
                </Text>
              </LegacyCard.Section>
              <LegacyCard.Section title="What's included on Medium store">

              <List type="number">
                    <List.Item>
                      <b>Unlimited notification registrations</b>
                    </List.Item>
                    <List.Item>
                       <b>Email notification</b>
                    </List.Item>
                    <List.Item>
                       <b>Webpush notification</b>
                    </List.Item>
                    <List.Item>
                       <b>50 Email/Push notifications sent each month</b>
                    </List.Item>                    
                    <List.Item>
                       <b>Activity Reports</b>
                    </List.Item>
                    <List.Item>
                       <b>Template Customization</b>
                    </List.Item>
                </List>

              </LegacyCard.Section>
            </LegacyCard>
            </Layout.Section>

            <Layout.Section oneThird>
            <LegacyCard title="Large store"
              actions={[{content: activeplan == "Advanced" ? <Badge status="success">Active</Badge> : ""}]}
              primaryFooterAction={{content: activeplan != "Advanced"?"Active":"Activated", onAction: ()=>{{
                if(activeplan != "Advanced") activePlan(4);
               }} }}>
              <LegacyCard.Section>
                <Text variant="heading2xl" as="h3">
                    $ 99.00<span style={{fontSize: "22px"}}> / month</span>
                </Text>
              </LegacyCard.Section>
              <LegacyCard.Section title="What's included on Large store">

              <List type="number">
                    <List.Item>
                      <b>Unlimited notification registrations</b>
                    </List.Item>
                    <List.Item>
                       <b>Email notification</b>
                    </List.Item>
                    <List.Item>
                       <b>Webpush notification</b>
                    </List.Item>
                    <List.Item>
                       <b>50 Email/Push notifications sent each month</b>
                    </List.Item>                    
                    <List.Item>
                       <b>Activity Reports</b>
                    </List.Item>
                    <List.Item>
                       <b>Template Customization</b>
                    </List.Item>
                </List>

              </LegacyCard.Section>
            </LegacyCard>
            </Layout.Section>

        </Layout>
      </Page>
      </Frame>
    );
  }
