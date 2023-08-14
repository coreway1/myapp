import { useState, useCallback, useEffect, useRef } from 'react';
import {Page, Layout, LegacyCard, Button, Frame, TextField, FormLayout, ContextualSaveBar, Toast, List, Form, DropZone, Banner} from '@shopify/polaris';
import NavigationMenu from "../component/navigation";
import app from "../fire-config.js";
import { doc, setDoc, getFirestore, getDoc, deleteDoc } from 'firebase/firestore';

function WebpushTemplate({shop, shopid}){
  const db = getFirestore(app);

  const defaultState = useRef({
    TitleFieldValue: '{{product.title | strip_html}} is now available',
    Description: '{{product.title | strip_html}} is now available to order from {{shop.name}}',
    ButtonText: 'BUY NOW',
    ButtonUrl: '{{ variant.url }}'
  });
  const [isDirty, setIsDirty] = useState(false);
  const [toastActive, setToastActive] = useState(false);

  const [TitleFieldValue, setTitleFieldValue] = useState(
    defaultState.current.TitleFieldValue,
  );
  const [Description, setDescription] = useState(
    defaultState.current.Description,
  );
  const [ButtonText, setButtonText] = useState(
    defaultState.current.ButtonText,
  );
  const [ButtonUrl, setButtonUrl] = useState(
    defaultState.current.ButtonUrl,
  );
  
  const handleDiscard = useCallback(() => {
    setTitleFieldValue(defaultState.current.TitleFieldValue);
    setDescription(defaultState.current.Description);
    setButtonText(defaultState.current.ButtonText);
    setButtonUrl(defaultState.current.ButtonUrl);    
    setIsDirty(false);
  }, []);

  const handleTitleFieldChange = useCallback((value) => {
    setTitleFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleDescriptionFieldChange = useCallback((value) => {
    setDescription(value);
    value && setIsDirty(true);
  }, []);
  const handleButtonTextChange = useCallback((value) => {
    setButtonText(value);
    value && setIsDirty(true);
  }, []);
  const handleButtonUrlChange = useCallback((value) => {
    setButtonUrl(value);
    value && setIsDirty(true);
  }, []);
  
  

  

  const handleSave = useCallback(async () => {
    defaultState.current.TitleFieldValue = TitleFieldValue;
    defaultState.current.Description = Description;
    defaultState.current.ButtonText = ButtonText;
    defaultState.current.ButtonUrl = ButtonUrl;
    
    
    setIsDirty(false);
    setToastActive(true);
    const customerRef2 = doc(db, shopid, "webpushtemplate");
    await setDoc(customerRef2, {TitleFieldValue: TitleFieldValue, Description: Description, ButtonText: ButtonText, ButtonUrl: ButtonUrl});

  }, [TitleFieldValue, Description, ButtonText, ButtonUrl]);

  const toggleToastActive = useCallback(
    () => setToastActive((toastActive) => !toastActive),
    [],
  );

  const toastMarkup = toastActive ? (
    <Toast onDismiss={toggleToastActive} content="Changes saved" />
  ) : null;

  const contextualSaveBarMarkup = isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: handleSave,
      }}
      discardAction={{
        onAction: handleDiscard,
      }}
    />
  ) : null;

  const getwebpushtemplate = async (shopid) => {

    const docRef = doc(db, shopid, "webpushtemplate");
    const docSnap = await getDoc(docRef);
    var data = docSnap.data() ? docSnap.data() : {};

    var objectLength = Object.keys(data).length;
    if(objectLength > 0){
      defaultState.current.TitleFieldValue = data.TitleFieldValue;
      defaultState.current.Description = data.Description;
      defaultState.current.ButtonText = data.ButtonText;
      defaultState.current.ButtonUrl = data.ButtonUrl;
      
      
      setTitleFieldValue(data.TitleFieldValue);
      setDescription(data.Description);
      setButtonText(data.ButtonText);
      setButtonUrl(data.ButtonUrl);
    }
  };

  useEffect(() => {
    if(shopid) getwebpushtemplate(shopid);
  }, [shopid]); 

  const previewmarkup = (
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
            {TitleFieldValue}
          </div>
          <div className="message">
            {Description}
          </div>
          <div className="source">Google Chrome • backinstock.org</div>
        </div>
      </div>
      <div className="buttons">
        <a
          href={ButtonUrl}
          rel="noopener noreferrer"
          target="_blank"
          type="button"
        >
          <div className="button">{ButtonText}</div>
        </a>
      </div>
    </div>
  
  </div>
</>

  );

    return (
        <Frame navigation={<NavigationMenu path="/webpush-template" />}>
          <Page title="Webpush Template" fullWidth>
            <Layout>
              <Layout.Section oneHalf>
                <LegacyCard sectioned>
                  <FormLayout>
                    <TextField
                      label="Title"
                      value={TitleFieldValue}
                      onChange={handleTitleFieldChange}
                      autoComplete="off"
                    />
                    <TextField
                      label="Description"
                      value={Description}
                      onChange={handleDescriptionFieldChange}
                      autoComplete="off"
                    />
                    <TextField
                      label="Button Text"
                      value={ButtonText}
                      onChange={handleButtonTextChange}
                      autoComplete="off"
                    />
                    <TextField
                      label="Button Url"
                      value={ButtonUrl}
                      onChange={handleButtonUrlChange}
                      autoComplete="off"
                    />
                  </FormLayout>
                </LegacyCard>
              </Layout.Section>
              <Layout.Section oneHalf>
                <LegacyCard sectioned>
                  {previewmarkup}
                </LegacyCard>
              </Layout.Section>
            </Layout>
          </Page>
          {contextualSaveBarMarkup}
          {toastMarkup}
        </Frame>
    );
}

  
export default WebpushTemplate;