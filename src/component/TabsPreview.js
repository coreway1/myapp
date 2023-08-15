import {LegacyCard, Tabs} from '@shopify/polaris';
import {useState, useCallback} from 'react';

function TabsPreview({TitleFieldValue,Description,ButtonUrl,ButtonText,shopdata,previewproduct}) {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );
  if(previewproduct) console.log(TitleFieldValue.raplace("{{product.title}}",previewproduct.node.title));


  const tabs = [
    {
      id: 'window',
      content: 'Window',
      accessibilityLabel: 'Window',
      panelID: 'window',
    },
    {
      id: 'android',
      content: 'Android',
      panelID: 'android',
    },
    {
      id: 'mac',
      content: 'Mac',
      panelID: 'mac',
    }
  ];

  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
      <LegacyCard.Section>
        {selected === 0 && (<>
            <>
  <link
    rel="stylesheet"
    href="https://static.backinstock.org/assets/web_push_preview-50501c80929f337ce619de70312cb1a5d91fef5e467704cbcb97ee99b6b78a86.css"
    media="screen"
  />
  <div id="web-push-preview-container">
    <div className="container" id="windows-notification-preview-container">
      <div className="notification-summary">
        <div className="icon">
          <img src="https://static.backinstock.org/assets/chrome_logo-5974a6aa895594740db1e2824fad768e16cb4fa1c7ea05d862c53cf287517cbb.png" />
        </div>
        <div className="content">
          <div className="title">
          {/* {TitleFieldValue.raplaceAll("{{product.title}}",previewproduct.node.title)} */}
          </div>
          <div className="message">
          {/* {Description.raplaceAll("{{product.title}}",previewproduct.node.title).raplaceAll("{{shop.name}}",shopdata.name)} */}
          </div>
          <div className="source">Google Chrome • backinstock.org</div>
        </div>
      </div>
      <div className="buttons">
        <a
          // href={ButtonUrl.raplaceAll("{{variant.url}}",previewproduct.node.onlineStorePreviewUrl)}
          rel="noopener noreferrer"
          target="_blank"
          type="button"
        >
          <div className="button">{ButtonText}</div>
        </a>
      </div>
    </div>
    <div className="container" style={{display: 'none'}}>
      <p className="preview-disclaimer">
        The final notification may differ from the above preview. Please send a
        test push notification to see what your customers will see.
      </p>
    </div>
  </div>
</>

</>)}
        {selected === 1 && (<>
            <>
  <link
    rel="stylesheet"
    href="https://static.backinstock.org/assets/web_push_preview-50501c80929f337ce619de70312cb1a5d91fef5e467704cbcb97ee99b6b78a86.css"
    media="screen"
  />
  <div id="web-push-preview-container">
    <div className="container" id="android-notification-preview-container">
      <div className="header">
        <img src="https://static.backinstock.org/assets/chrome_logo_grey-52fd08ed39939e891122d0e0752b33b5a85f6f2c241460abcb659a75b7098e58.png" />
        Google Chrome • backinstock.org • Now
      </div>
      <div className="notification-summary">
        <div className="content">
          <div className="title">
            All Purpose Cleaner - 5 LTR is now available
          </div>
          <div className="message">
            All Purpose Cleaner - 5 LTR is now available to order from
            products-fileds.
          </div>
        </div>
        <div className="icon">
          <img src="https://static.backinstock.org/assets/chrome_logo-5974a6aa895594740db1e2824fad768e16cb4fa1c7ea05d862c53cf287517cbb.png" />
        </div>
      </div>
      <div className="buttons">
        <a
          href="http://products-fileds.myshopify.com/products/all-purpose-cleaner?bis_id=Do&utm_campaign=stock-notification&utm_content=All+Purpose+Cleaner+-+5+LTR&utm_medium=web-push&utm_source=back-in-stock&variant=42278590021878"
          rel="noopener noreferrer"
          target="_blank"
          type="button"
        >
          <div className="button">BUY NOW</div>
        </a>
      </div>
    </div>
    <div className="container">
      <p className="preview-disclaimer">
        The final notification may differ from the above preview. Please send a
        test push notification to see what your customers will see.
      </p>
    </div>
  </div>
</>

</>)}
        {selected === 2 && (<>
            <>
  <link
    rel="stylesheet"
    href="https://static.backinstock.org/assets/web_push_preview-50501c80929f337ce619de70312cb1a5d91fef5e467704cbcb97ee99b6b78a86.css"
    media="screen"
  />
  <div id="web-push-preview-container">
    <div className="container" id="mac-notification-preview-container">
      <div className="header">
        <img src="https://static.backinstock.org/assets/chrome_logo-5974a6aa895594740db1e2824fad768e16cb4fa1c7ea05d862c53cf287517cbb.png" />
        GOOGLE CHROME
      </div>
      <div className="notification-summary">
        <div className="content">
          <div className="title">
            All Purpose Cleaner - 5 LTR is now available
          </div>
          <div className="message">backinstock.org</div>
          <div className="message">
            All Purpose Cleaner - 5 LTR is now available to order from
            products-fileds.
          </div>
        </div>
        <div className="icon">
          <img src="https://static.backinstock.org/assets/chrome_logo-5974a6aa895594740db1e2824fad768e16cb4fa1c7ea05d862c53cf287517cbb.png" />
        </div>
      </div>
    </div>
    <div className="container">
      <p className="preview-disclaimer">
        The final notification may differ from the above preview. Please send a
        test push notification to see what your customers will see.
      </p>
    </div>
  </div>
</>

</>)}
      </LegacyCard.Section>
    </Tabs>
  );
}

export default TabsPreview;