import { useState, useCallback, useEffect, useRef } from 'react';
import {Page, Layout, LegacyCard, Button, Frame, TextField, FormLayout, ContextualSaveBar, Toast, List, Form, DropZone, Banner} from '@shopify/polaris';
import NavigationMenu from "../component/navigation";
import app from "../fire-config.js";
import { doc, setDoc, getFirestore, getDoc, deleteDoc } from 'firebase/firestore';

function WebpushTemplate(){
  const db = getFirestore(app);

  const defaultState = useRef({
    TitleFieldValue: '',
    Description: '',
    ButtonText: '',
    ButtonUrl: ''
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
    const customerRef2 = doc(db, "61718233334", "webpushtemplate");
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
    getwebpushtemplate("61718233334");
  }, []); 

  const previewmarkup = (
    <Button>{TitleFieldValue}</Button>
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