import {
    Card,
    LegacyCard,
    CalloutCard,
    Page,
    Layout,
    List,
    Badge, 
    ResourceItem, 
    Text,
    Frame,
  } from "@shopify/polaris";


  import { useState, useCallback, useEffect } from "react";  

  import NavigationMenu from "../component/navigation";

  import {useNavigate} from "react-router-dom"
  
  export default function Plans({shop, shopid}) {

  
    const [activeplan, setactiveplan] = useState(false);
      
    
  
  
      const navigate = useNavigate();
   
      const activePlan = useCallback( async (index) => {
  
    
  
          const response = await fetch("/api/application_charges", {
            method:"POST", 
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({index: index})
          });
          let dataResult = await response.json();
          console.log(dataResult.confirmation_url);
          navigate(dataResult.confirmation_url);
          
      },[]);
  
  
      const getplan = async () => {
        const response = await fetch("/api/application_chargescheck");
        let dataResult = await response.json();
        const { hasActivePayment } = dataResult;
  
        if(hasActivePayment){
            var last = dataResult.oneTimePurchases.slice(-1)[0];
          setactiveplan(last.name);
        }else{
          setactiveplan(false);
        }
      };
  
    //   useEffect(() => {
    //     getplan();
    //   }, []);
  
  


  
      return (
        <Frame navigation={<NavigationMenu path="/settings" />}>
          <Page title="Plans" backAction={{content: 'Settings', url: '/settings'}}>
  
  
  <Layout>

         
          <Layout.Section>
            <LegacyCard title="Basic" 
            actions={[{content: activeplan == "Basic" ? <Badge status="success">Active</Badge> : ""}]} 
            primaryFooterAction={{content: activeplan != "Basic"?"Active":"Activated", onAction: ()=>{{
                if(activeplan != "Basic") activePlan(0);
               }} }}>
              <LegacyCard.Section>
                <p>Level up your business with professional reporting and more.</p>
                
               
                  <Text variant="heading4xl" as="h1">
                    $ 199.00<span style={{fontSize: "22px"}}>/mo</span>
                </Text>
             
              </LegacyCard.Section>
              <LegacyCard.Section title="What's included on Basic">
                <List>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Branding</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Home page customization</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Collection page customization</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Catalog page customization</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Cart page customization</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Product detail page customization</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Marketing push notifications</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Transactional push notifications</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Basic analytics</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Deep linking</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Sub collection</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Quick order facility for grocery/food/QSR</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Floating cart</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Design elements widget (12 widgets)</span>
                    </List.Item>

                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Advanced analytics</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Seasonal effects</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Custom CMS pages</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Brand personalization expert help</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Multi language</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>App specific discount codes</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Wishlist</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Integrations</span>
                    </List.Item>

                    
           
                  
                </List>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section>
            <LegacyCard
              title="Standerd"
              actions={[{content: activeplan == "Standerd" ? <Badge status="success">Active</Badge> : ""}]}
              primaryFooterAction={{content: activeplan != "Standerd"?"Active":"Activated", onAction: ()=>{{
                if(activeplan != "Standerd") activePlan(1);
               }} }}
            >
              <LegacyCard.Section>
                <p>Get the best of Shopify with custom reporting and our lowest transaction fees</p>
                <Text variant="heading4xl" as="h1">
                    $ 399.00<span style={{fontSize: "22px"}}>/mo</span>
                </Text>
              </LegacyCard.Section>
              <LegacyCard.Section title="What's included on Standerd">
                <List>
                <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Branding</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Home page customization</span>
                    </List.Item>
                    <List.Item>
                         <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                         <span>Collection page customization</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Catalog page customization</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                         <span>Cart page customization</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Product detail page customization</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                         <span>Marketing push notifications</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Transactional push notifications</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Basic analytics</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Deep linking</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Sub collection</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Quick order facility for grocery/food/QSR</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Floating cart</span>
                    </List.Item>

                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Design elements widget (16 widgets)</span>
                    </List.Item>

                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Advanced analytics</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Seasonal effects</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Custom CMS pages</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Brand personalization expert help</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Multi language</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>App specific discount codes</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Wishlist</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDI2IDI2Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPiA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Integrations</span>
                    </List.Item>
                </List>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section>
            <LegacyCard
              title="Advanced"
              actions={[{content: activeplan == "Advanced" ? <Badge status="success">Active</Badge> : ""}]}
              primaryFooterAction={{content: activeplan != "Advanced"?"Active":"Activated", onAction: ()=>{{
                if(activeplan != "Advanced") activePlan(2);
               }} }}
            >
              <LegacyCard.Section>
                <p>Get the best of Shopify with custom reporting and our lowest transaction fees</p>
     
                <Text variant="heading4xl" as="h1">
                    $ 599.00<span style={{fontSize: "22px"}}>/mo</span>
                </Text>
              </LegacyCard.Section>
              <LegacyCard.Section title="What's included on Advanced">
                <List>
                <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Branding</span>
                    </List.Item>
                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Home page customization</span>
                    </List.Item>
                    <List.Item>
                         <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                         <span>Collection page customization</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Catalog page customization</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                         <span>Cart page customization</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Product detail page customization</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                         <span>Marketing push notifications</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Transactional push notifications</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Basic analytics</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Deep linking</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Sub collection</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Quick order facility for grocery/food/QSR</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Floating cart</span>
                    </List.Item>

                    <List.Item>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                        <span>Design elements widget (18 widgets)</span>
                    </List.Item>

                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                       <span>Advanced analytics</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                       <span>Seasonal effects</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                       <span>Custom CMS pages</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                       <span>Brand personalization expert help</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                       <span>Multi language</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                       <span>App specific discount codes</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                       <span>Wishlist</span>
                    </List.Item>
                    <List.Item>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiIGZpbGw9IiMwMjg3NWYiPjwvcGF0aD4gPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIj48L3BhdGg+PC9zdmc+" style={{width: "30px"}} /> 
                       <span>Integrations</span>
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