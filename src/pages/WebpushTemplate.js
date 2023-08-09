import { useState, useCallback, useEffect, useRef } from 'react';
import {Page, Layout, LegacyCard, Button, Frame, TextField, FormLayout, ContextualSaveBar, Toast} from '@shopify/polaris';
import NavigationMenu from "../component/navigation";
import app from "../fire-config.js";
import { doc, setDoc, getFirestore, getDoc, deleteDoc } from 'firebase/firestore';

function WebpushTemplate(){
  const db = getFirestore(app);

  const defaultState = useRef({
    subjectFieldValue: 'Item back in stock!',
  });
  const [isDirty, setIsDirty] = useState(false);
  const [toastActive, setToastActive] = useState(false);

  const [subjectFieldValue, setsubjectFieldValue] = useState(
    defaultState.current.subjectFieldValue,
  );
  const handleDiscard = useCallback(() => {
    setsubjectFieldValue(defaultState.current.subjectFieldValue);
    setIsDirty(false);
  }, []);

  const handleNameFieldChange = useCallback((value) => {
    setsubjectFieldValue(value);
    value && setIsDirty(true);
  }, []);

  const handleSave = useCallback(async () => {
    defaultState.current.subjectFieldValue = subjectFieldValue;
    setIsDirty(false);
    setToastActive(true);
    const customerRef2 = doc(db, "61718233334", "emailtemplate");
    await setDoc(customerRef2, {subjectFieldValue: subjectFieldValue});

  }, [subjectFieldValue]);

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

  const getemailtemplate = async (shopid) => {

    const docRef = doc(db, shopid, "emailtemplate");
    const docSnap = await getDoc(docRef);
    var data = docSnap.data() ? docSnap.data() : {};
    var objectLength = Object.keys(data).length;
    if(objectLength > 0){
      defaultState.current.subjectFieldValue = data.subjectFieldValue;
      setsubjectFieldValue(data.subjectFieldValue);
    }
  };

  useEffect(() => {
    getemailtemplate("61718233334");
  }, []); 

  const previewmarkup = (
    <Button>{subjectFieldValue}</Button>
  );

    return (
        <Frame navigation={<NavigationMenu path="/webpush-template" />}>
          <Page title="Webpush Template" fullWidth>
            <Layout>
              <Layout.Section oneHalf>
                <LegacyCard sectioned>
                  <FormLayout>
                    <TextField
                      label="Subject"
                      value={subjectFieldValue}
                      onChange={handleNameFieldChange}
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